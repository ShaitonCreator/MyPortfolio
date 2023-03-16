import React from "react";
// import "./home.scss";
import Intro from "./intro/Intro";
import Projects from "./projects/Projects";

const home = () => {
  return (
    <main>
      <Intro />
      <Projects />
    </main>
  );
};

export default home;
