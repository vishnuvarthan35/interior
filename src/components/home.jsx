import React from "react";
import Header from "../common/header";
import HomeHeroSection from "../layout/home page/homeherosection";
import HomeFurniture from "../layout/home page/homefurniture";
import HomeWelcome from "../layout/home page/homewelcome";
import HomeProject from "../layout/home page/homeproject";
import HomeTeam from "../layout/home page/homeTeam";
import HomeCounter from "../layout/home page/homecounter";
import HomeTestimonials from "../layout/home page/hometestimonials";
import HomeNews from "../layout/home page/homeNews";
import Footer from "../common/footer";
function Home() {
    return (
        <>
        <Header/>
        <HomeHeroSection/>
        <HomeWelcome/>
        <HomeProject/>  
        <HomeTeam/>
        <HomeCounter/>
        <HomeTestimonials/>
        <HomeNews/>
        <Footer/>
        </>
    );
}
export default Home;
