import React, { useEffect } from "react";

export default function HomeTestimonials() {
    useEffect(() => {
        let currentSlide = 0;
        const slides = document.querySelectorAll(".carousel-slide");
        const totalSlides = slides.length;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) slide.classList.add("active");
            });
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        };

        showSlide(currentSlide);

        // Automatic slide transition every 3 seconds
        const intervalId = setInterval(nextSlide, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="testimonials-wrap">
            <div className="container">
                <div className="title">
                    <h1>
                        <span>Testimonials</span> What Our Client Says
                    </h1>
                </div>
                <div className="carousel">
                    <div className="carousel-slides">
                        <div className="carousel-slide active">
                            <div className="rating">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros,
                                commodo et est non, lobortis accumsan nisi...
                            </p>
                            <div className="testInfo">
                                <div className="testimg">
                                    <img src="/asset/images/client-1.jpg" alt="Client 1" />
                                </div>
                                <div className="clientname">Duis Consectetur</div>
                                <div className="clientinfo">Designation Here</div>
                            </div>
                        </div>
                        <div className="carousel-slide">
                            <div className="rating">
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                                <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim eros,
                                commodo et est non, lobortis accumsan nisi...
                            </p>
                            <div className="testInfo">
                                <div className="testimg">
                                    <img src="/asset/images/client-.jpg" alt="Client 2" />
                                </div>
                                <div className="clientname">Duis Consectetur</div>
                                <div className="clientinfo">Designation Here</div>
                            </div>
                        </div>
                        {/* Add more slides if needed */}
                    </div>
                </div>
            </div>
            <style>{`
                .testimonials-wrap {
                    padding: 60px 0;
                    text-align: center;
                    background: #f4f4f4;
                    font-family: Arial, sans-serif;
                }
                .title h1 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    color: #333;
                }
                .title h1 span {
                    color: #007bff;
                    font-weight: bold;
                }
                .carousel {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                    overflow: hidden;
                }
                .carousel-slides {
                    position: relative;
                }
                .carousel-slide {
                    display: none;
                    text-align: center;
                    padding: 20px;
                    background: white;
                    border: 1px solid #ddd;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                }
                .carousel-slide.active {
                    display: block;
                }
                .rating {
                    color: #ffc107;
                    margin-bottom: 15px;
                }
                .testInfo {
                    margin-top: 20px;
                }
                .testimg img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                }
                .clientname {
                    margin-top: 10px;
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: #555;
                }
                .clientinfo {
                    font-size: 0.9rem;
                    color: #777;
                }
            `}</style>
        </div>
    );
}
