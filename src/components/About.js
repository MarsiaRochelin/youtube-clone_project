import React from "react";
import about from "../about.css"

function About() {
  return (
    <div className="about">
      <h1>About the Project</h1>
      <p>
        Create an app in the likeness of Youtube that give [users] a great UI
        and seamless UX.
      </p>
      <h1>About the Developer</h1>
      <img src="./Mars.jpg" alt="Mars"></img>
      <p>
        [Mars]ia [Roc]helin is a [Full Stack Web Developer] who desires to align
        herself with opportunities/enviroments that grants her autonomy to tap
        into her creativity when maintaining software infrastructures and
        assuring their quality.
      </p>
      <a href="https://github.com/MarsiaRochelin">My Github</a>
    </div>
  );
}

export default About;
