import React from "react";

export default function HomeWelcome() {
    return (
        <div className="welcomeWrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="title">
                            <h1><span>welcome to</span> MSAV <strong>Interiors</strong></h1>
                        </div>
                        <h3>We are the best Interior designer since 1990.</h3>
                        <p>
                            With over three decades of experience, we specialize in transforming spaces into timeless masterpieces. Our expertise lies in blending functionality with style, ensuring each project reflects our clients' unique vision and exceeds expectations. From residential to commercial spaces, we craft designs that stand the test of time.
                        </p>

                        <div className="welcome-content-box row">
                             <style>
                                {`
      .welcome-box {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
      }

      .welcome-box:hover {
        transform: scale(1.05); /* Slightly enlarges the box */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Adds a shadow effect */
      }

      .welcome-box h4 {
        transition: color 0.3s ease;
      }

      .welcome-box:hover h4 {
        color: #FFD700; /* Changes heading color to gold on hover */
      }

      .houseIcon img {
        transition: transform 0.3s ease;
      }

      .welcome-box:hover .houseIcon img {
        transform: scale(1.1); /* Slightly enlarges the icon on hover */
      }
    `}
                            </style>

                            <div className="col-md-4 col-sm-4 welcome-box">
                                <div className="houseIcon">
                                    <img src="/asset/images/house.png" alt="Residential Design Icon" />
                                </div>
                                <h4>Residential Design</h4>
                                <p>
                                    We create personalized, functional, and elegant residential interiors that bring your dream home to life, blending comfort and style seamlessly.
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-4 welcome-box">
                                <div className="houseIcon">
                                    <img src="/asset/images/house2.png" alt="Restaurant Design Icon" />
                                </div>
                                <h4>Restaurant Design</h4>
                                <p>
                                    Our innovative restaurant designs focus on creating inviting atmospheres that enhance dining experiences, combining aesthetics with practicality.
                                </p>
                            </div>
                            <div className="col-md-4 col-sm-4 welcome-box">
                                <div className="houseIcon">
                                    <img src="/asset/images/house3.png" alt="Industrial Design Icon" />
                                </div>
                                <h4>Industrial Design</h4>
                                <p>
                                    We deliver modern industrial designs that prioritize functionality and efficiency while embracing bold, raw aesthetics for impactful spaces.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5">
                        <div className="welImg"><img src="/asset/images/welcomeImg.jpg" alt /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}