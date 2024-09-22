import "./Home.css";
import React from "react";
import Headshot from "../assets/images/headshot.png";
import CustomizedTimeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="title">Howdy, I'm Sophia!</h1>
      </div>
      <div className="line" />

      <div className="textAndPic">
        <div className="leftText">
          <p>
            I'm a new face in the <del>Wild West</del> tech industry with a
            passion for all things development and design!
          </p>
        </div>
        <div>
          <img src={Headshot} className="headshot" />
        </div>
      </div>

      <div />

      <div>
        <CustomizedTimeline />
      </div>
    </>
  );
}
