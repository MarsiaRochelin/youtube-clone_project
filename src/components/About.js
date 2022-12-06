import React from "react";

function About() {
  return (
    <div>
      <h1>About the Project</h1>
      <p>
        Create an app in the likeness of Youtube that give [users] a great UI
        and seamless UX.
      </p>
      <h1>About the Developer</h1>
      {/* having issues with the path for my image */}
      <img src="" alt="Mars Pic"></img>
      <p>
        [Mars]ia [Roc]helin is a [Fullstack Web Developer] who desires to align
        herself with opportunities best suited for her gaining more experience
        assuring the quality of apps, by maintaining software infrastructures.
        She wishes to be in enviroments that aid in her growth through
        leadership that grants her autonomy to tap into her innate creativity.
      </p>
      <a href="https://github.com/MarsiaRochelin">My Github</a>
    </div>
  );
}

export default About;
