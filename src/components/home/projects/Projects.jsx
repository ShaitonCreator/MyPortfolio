import React, { useState, useEffect } from "react";
import SingleProject from "./singleProject/SingleProject";
import ecommerce from "../../../assets/projectImages/ecommerce.png";
import movix from "../../../assets/projectImages/movix.png";
import news from "../../../assets/projectImages/news.png";
import notes from "../../../assets/projectImages/notes.png";
import "./Projects.scss";
const Projects = () => {
  const [runAnimation, setRunAnimation] = useState(false);
  const [runAnimationJs, setRunAnimationJs] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlAnimation = () => {
    if (window.scrollY > 400) {
      setRunAnimation(true);
    }
    if (window.scrollY > 600) {
      setRunAnimationJs(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlAnimation);
    return () => window.removeEventListener("scroll", controlAnimation);
  }, [lastScrollY]);
  return (
    <section id="portfolio">
      <div className="single-page-projects">
        <div
          className="heading"
          style={
            runAnimation
              ? { animation: "slideBottom 2s ease forwards" }
              : { animation: "" }
          }
        >
          Single Page Projects
        </div>
        <div
          className="projects"
          style={
            runAnimation
              ? { animation: "slideRight 2s ease forwards" }
              : { animation: "" }
          }
        >
          <SingleProject
            name="E-Commerce"
            img={ecommerce}
            link="https://e-commerce-app.shaiton.repl.co/"
          />
          <SingleProject
            name="Movix"
            img={movix}
            link="https://shazmovies.shaiton.repl.co/"
          />
          <SingleProject
            img={news}
            link="https://daily-news.shaiton.repl.co/politics"
            name="Daily News"
          />
          <SingleProject
            img={notes}
            link="https://notes-app-new.shaiton.repl.co/"
            name="Notes App"
          />
        </div>
      </div>
      <div className="js-projects">
        <div
          className="heading"
          style={
            runAnimationJs
              ? { animation: "slideTop 2s ease forwards" }
              : { animation: "" }
          }
        >
          Java Script Projects
        </div>
        <div
          className="projects"
          style={
            runAnimationJs
              ? { animation: "slideLeft 2s ease forwards" }
              : { animation: "" }
          }
        >
          <SingleProject />
        </div>
      </div>
    </section>
  );
};

export default Projects;
