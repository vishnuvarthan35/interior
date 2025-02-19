import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (

        <div className="footer-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="footer-logo"><a href="index.html"><img src="/asset/images/logo.png" alt /></a></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam neque eget ipsum porta, sed convallis odio convallis... <a href="#">Read More</a> </p>
                        <div className="social"> <a href="#." target="_blank"> <i className="fa fa-facebook-square" aria-hidden="true" /></a> <a href="#." target="_blank"><i className="fa fa-twitter-square" aria-hidden="true" /></a> <a href="#." target="_blank"><i className="fa fa-google-plus-square" aria-hidden="true" /></a> <a href="#." target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true" /></a> <a href="#." target="_blank"><i className="fa fa-youtube-square" aria-hidden="true" /></a> </div>
                    </div>
                    <div className="col-md-2 col-sm-4 col-xs-12">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li> <Link to="/"> Home </Link></li>
                            <li> <Link to="/about"> About Us </Link></li>
                            <li> <Link to="/service"> Services </Link></li>
                            <li> <Link to="/contact"> Contact us </Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <h3>Contact Info</h3>
                        <div className="footer-address">1234 Lorem Road, ISpum A Kennesaw, GA 1234</div>
                        <div className="call-us"> <a href="#">(777) 123-4567</a></div>
                        <div className="fax"> <a href="#">(777) 132-4567</a></div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <h3>Instragram</h3>
                        <ul className="instragram">
                            <li><a href="#"><img src="/asset/images/insta01.jpg" alt /></a></li>
                            <li><a href="#"><img src="/asset/images/insta02.jpg" alt /></a></li>
                            <li><a href="#"><img src="/asset/images/insta03.jpg" alt /></a></li>
                            <li><a href="#"><img src="/asset/images/insta04.jpg" alt /></a></li>
                            <li><a href="#"><img src="/asset/images/insta05.jpg" alt /></a></li>
                            <li><a href="#"><img src="/asset/images/insta06.jpg" alt /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerWrp">
                    <div className="copyright">© 2017 company name here | All Rights Reserved</div>
                </div>
            </div>
        </div>
    );
}