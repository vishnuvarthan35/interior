import React from "react";

// Import images
import blogThumb1 from "../../asset/images/blog-thumb-1.jpg";
import blogThumb2 from "../../asset/images/blog-thumb-2.jpg";
import blogThumb3 from "../../asset/images/blog-thumb-3.jpg";
import blogThumb4 from "../../asset/images/blog-thumb-4.jpg";
import blogThumb5 from "../../asset/images/blog-thumb-5.jpg";
import blogThumb6 from "../../asset/images/blog-thumb-6.jpg";

export default function ServiceContent() {
    return (
        <div>
            <div className="inner-heading">
                <div className="container">
                    <h1>Our Services</h1>
                </div>
            </div>
            <div className="inner-content">
                <div className="container">
                    {/*Services Start*/}
                    <div className="service-wrap">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="service-thumb service-list-thumb">
                                    <div className="serviceImg">
                                        <img src={blogThumb1} alt="" />
                                    </div>
                                    <div className="serviceInfo">
                                        <h5>
                                            <a href="#">Nunc sagittis bibendum elit </a>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                                            eiusmod tempor incididunt utlabore et dolore...
                                        </p>
                                        <div className="readmore">
                                            <a href="service-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="service-thumb service-list-thumb">
                                    <div className="serviceImg">
                                        <img src={blogThumb2} alt="" />
                                    </div>
                                    <div className="serviceInfo">
                                        <h5>
                                            <a href="#">Nunc sagittis bibendum elit </a>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                                            eiusmod tempor incididunt utlabore et dolore...
                                        </p>
                                        <div className="readmore">
                                            <a href="service-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="service-thumb service-list-thumb">
                                    <div className="serviceImg">
                                        <img src={blogThumb3} alt="" />
                                    </div>
                                    <div className="serviceInfo">
                                        <h5>
                                            <a href="#">Nunc sagittis bibendum elit </a>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                                            eiusmod tempor incididunt utlabore et dolore...
                                        </p>
                                        <div className="readmore">
                                            <a href="service-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="service-thumb service-list-thumb">
                                    <div className="serviceImg">
                                        <img src={blogThumb4} alt="" />
                                    </div>
                                    <div className="serviceInfo">
                                        <h5>
                                            <a href="#">Nunc sagittis bibendum elit </a>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                                            eiusmod tempor incididunt utlabore et dolore...
                                        </p>
                                        <div className="readmore">
                                            <a href="service-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="service-thumb service-list-thumb">
                                    <div className="serviceImg">
                                        <img src={blogThumb5} alt="" />
                                    </div>
                                    <div className="serviceInfo">
                                        <h5>
                                            <a href="#">Nunc sagittis bibendum elit </a>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                                            eiusmod tempor incididunt utlabore et dolore...
                                        </p>
                                        <div className="readmore">
                                            <a href="service-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="service-thumb service-list-thumb">
                                    <div className="serviceImg">
                                        <img src={blogThumb6} alt="" />
                                    </div>
                                    <div className="serviceInfo">
                                        <h5>
                                            <a href="#">Nunc sagittis bibendum elit </a>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do
                                            eiusmod tempor incididunt utlabore et dolore...
                                        </p>
                                        <div className="readmore">
                                            <a href="service-details.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services End*/}
                </div>
            </div>
        </div>
    );
}
