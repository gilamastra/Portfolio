import React, { useEffect, useState } from "react";
import "./projects.css";
import projectsData from "../projects.json";
import SingleProject from "./SingleProject";
import { Link } from "react-router-dom";
import { db } from "../firebase";

function Projects({ project1, project1Hover }) {
  return (
    <div
      id="projects"
      className="container projectsContainer mt-8 text-center"
    >
      <h2 className="projects-title">Portfolio</h2>

      <div className="project-container row ">
        <div className="single-project-image col-sm  ">
          <Link to="/projects/NetflixClone">
            <SingleProject
              projectName={"Neftlix Clone"}
              className="img"
              img={project1}
            />
          </Link>
        </div>

        <div className="single-project-image col-sm col-xm-12 ">
          <SingleProject className="img" img={project1} />
        </div>
      </div>

      <div className=" row ">
        <div className="single-project-image col-sm col--12 ">
          <SingleProject className="img" img={project1} />
        </div>

        <div className="single-project-image col-sm col-xm-12 ">
          <SingleProject className="img" img={project1} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
