import React, { useState, useEffect, useRef } from "react";

export default function AboutCounter() {
    const [counters, setCounters] = useState({
        projects: 0,
        ideas: 0,
        clients: 0,
        coffee: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !hasAnimated) {
                    const timers = [];

                    const animate = (target, speed, key) => {
                        let current = 0;
                        const step = Math.ceil(target / (speed / 16));
                        
                        const timer = setInterval(() => {
                            current += step;
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            setCounters(prev => ({ ...prev, [key]: current }));
                        }, 16);

                        timers.push(timer);
                    };

                    animate(1456, 3000, 'projects');
                    animate(144, 4000, 'ideas');
                    animate(917, 5000, 'clients');
                    animate(261, 6000, 'coffee');

                    setHasAnimated(true);
                    observer.disconnect();

                    return () => timers.forEach(timer => clearInterval(timer));
                }
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <div id="counter" ref={counterRef}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
                        <div className="counterbox">
                            <div className="counter-icon"><i className="fa fa-home" aria-hidden="true" /></div>
                            <span className="counter-number">{Math.floor(counters.projects)}</span>
                            <span className="counter-text">Projects Completed</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
                        <div className="counterbox">
                            <div className="counter-icon"><i className="fa fa-bullhorn" aria-hidden="true" /></div>
                            <span className="counter-number">{Math.floor(counters.ideas)}</span>
                            <span className="counter-text">Fresh Ideas</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
                        <div className="counterbox">
                            <div className="counter-icon"><i className="fa fa-users" aria-hidden="true" /></div>
                            <span className="counter-number">{Math.floor(counters.clients)}</span>
                            <span className="counter-text">Satistied Clients</span>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
                        <div className="counterbox">
                            <div className="counter-icon"><i className="fa fa-coffee" aria-hidden="true" /></div>
                            <span className="counter-number">{Math.floor(counters.coffee)}</span>
                            <span className="counter-text">Cups of Coffee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
