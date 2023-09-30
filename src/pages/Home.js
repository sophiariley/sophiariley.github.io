import "./Home.css";
import React from "react";
import { ReactDOM } from "react";
import Logo from "../assets/images/logo.png"
import Headshot from "../assets/images/headshot.png"
import Rainbow from "../assets/images/rainbow.png"
// import Cowgal from "../assets/images/cowgal.png"
import CustomizedTimeline from "../components/Timeline";

export default function Home() {
    return (
        <>
            <img src={Logo} className="logo" />
            <div>
                <h1 className="title">Howdy, I'm Sophia!</h1>
            </div>
            <div className="line"/>
            
            <div className="textAndPic">
                <div className="leftText">
                    <p>
                        I'm a new face in the <del>Wild West</del> tech industry with a passion for all things development and design!
                    </p>
                </div>
                <div>
                    {/* <img src={Cowgal} className="cowgal"/> */}
                    <img src={Headshot} className="headshot" />
                </div>
            </div>
            <div>
                <CustomizedTimeline/>
                <div className="testt">
                <img src={Rainbow} className="rainbowCorner"/>
            </div>
            </div>
        </>
    )
}