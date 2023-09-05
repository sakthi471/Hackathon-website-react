import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Tracks from "./Tracks";
import Statistics from "./Statistics";
import Timeline from "./Timeline";
import Sponers from "./Sponers";

const Home = () => {
    return (
        <div className=" w-full  bg-primary  ">
            <div className=" w-full ">

                <Hero />
            </div>
            <About />
            <Tracks />
            <Statistics />
            <Timeline />
            <Sponers />
        </div>
    )
}

export default Home
