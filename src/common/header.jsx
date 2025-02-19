import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-wrap">
        <div className="container">
            <div className="navigationwrape">
                <div className="navbar navbar-default" role="navigation">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="logo"><a href="index.html"><img src="/asset/images/logo.png" alt /></a></div>
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                            </div>
                        </div>
                       
                        <div className="col-md-8 col-sm-10">
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li> <Link to="/"> Home </Link></li>
                                    <li> <Link to="/about"> About Us </Link></li>
                                    <li> <Link to="/service"> Services </Link></li>
                                    <li> <Link to="/contact"> Contact us </Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
        </div>
    </div>
    );
}