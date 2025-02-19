import React from 'react';

function AboutTeam() {
    return (
        <div className="team-wrap">
        <div className="container">
            <div className="title">
                <h1><span>Our</span> Team</h1>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam nisi, sollicitudin venenatis nisl id, iaculis pharetra quam. <span>Vivamus cursus est vel sagittis tristique. Nunc vel ligula mollis, imperdiet dolor quis, consectetur magna. Duis facilisis tempor lectus tempus dignissim. Praesent lacus ante, mattis sit amet purus non, suscipit pellentesque odio.</span></p>
            <div className="clearfix" />
            <ul className="row">
                <li className="col-md-3 col-sm-6">
                    <div className="teamImg"><img src="/asset/images/team01.jpg" alt />
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                    <div className="teamInfo">
                        <h3>John Smith</h3>
                        <div className="designation">Lorem Ispum</div>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6">
                    <div className="teamImg"><img src="/asset/images/team03.jpg" alt />
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                    <div className="teamInfo">
                        <h3>Elaine Davis</h3>
                        <div className="designation">Lorem Ispum</div>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6">
                    <div className="teamImg"><img src="/asset/images/team02.jpg" alt />
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                    <div className="teamInfo">
                        <h3>John Smith</h3>
                        <div className="designation">Lorem Ispum</div>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6">
                    <div className="teamImg"><img src="/asset/images/team04.jpg" alt />
                        <ul className="social-icons">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                    <div className="teamInfo">
                        <h3>Scott Grey</h3>
                        <div className="designation">Lorem Ispum</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default AboutTeam;

