import React from "react";
import "./singleProject.scss";
function SingleProject({ name, link, img }) {
  return (
    <div className="project-container">
      <a href={link} target="_blank">
        <div className="project-img">
          <img src={img} alt=""></img>
        </div>
        <div className="name">
          <span>{name}</span>
        </div>
      </a>
    </div>
  );
}

export default SingleProject;
