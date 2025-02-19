import React from "react";
import house1 from '../../asset/images/house.png';
import house2 from '../../asset/images/house2.png';
import house3 from '../../asset/images/house3.png';
import welcomeImg from '../../asset/images/welcomeImg.jpg';

 function AboutContent() {
    return (
        <div>
            <div className="inner-heading">
                <div className="container">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="inner-content aboutWrp">
                <div className="container">
                    {/*About Start*/}
                    <div className="about-wrap">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="title">
                                    <h1>
                                        <span>welcome to</span> Interior <strong>Architecture</strong>
                                    </h1>
                                </div>
                                <h3>We are the best Interior designer since 1990.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    facilisis leo eget maximus volutpat. Nulla eget bibendum urna, et
                                    vehicula ante. Donec et diam sodales, pellentesque est a, posuere
                                    ex. Curabitur mattis viverra semper.
                                </p>
                                <div className="welcome-content-box row">
                                    <div className="col-md-4 col-sm-4 welcome-box">
                                        <div className="houseIcon">
                                            <img src={house1} alt="Residential Design Icon" />
                                        </div>
                                        <h4>Residential Design</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                            facilisis leo eget.
                                        </p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 welcome-box">
                                        <div className="houseIcon">
                                            <img src={house2} alt="Restaurant Design Icon" />
                                        </div>
                                        <h4>Restaurant Design</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                            facilisis leo eget.
                                        </p>
                                    </div>
                                    <div className="col-md-4 col-sm-4 welcome-box">
                                        <div className="houseIcon">
                                            <img src={house3} alt="Industrial Design Icon" />
                                        </div>
                                        <h4>Industrial Design</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                            facilisis leo eget.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="welImg">
                                    <img src={welcomeImg} alt="Welcome" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
