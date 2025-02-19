import React from "react";
import AboutContent from "../layout/aboutpage/aboutcontent";
import AboutCounter from "../layout/aboutpage/aboutcounter";
import AboutTeam from "../layout/aboutpage/aboutteam";
import Header from "../common/header";
import Footer from "../common/footer";

function About() {
    return (
        <>
        <Header/>
        <AboutContent/>
        <AboutCounter/>
        <AboutTeam/>
        <Footer/>
        </>
    );
}

export default About;