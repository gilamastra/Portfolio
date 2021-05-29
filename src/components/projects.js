import React from "react";
import "./projects.css";
import SingleProject from "./SingleProject";
import { Link } from "react-router-dom";

function Projects({ project1, project2, project3, project4 }) {
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
               <Link to="/projects/SlackClone">
                  <SingleProject
                     projectName={"Slack Clone"}
                     className="img"
                     img={project2}
                  />
               </Link>
            </div>
         </div>

         <div className=" row ">
            <div className=" single-project-image col-sm-6 col-xm-12 ">
               <Link className="text-xm" to="/projects/CatWiki">
                  <SingleProject
                     color="black"
                     projectName={"Cat Wiki"}
                     className="img"
                     img={project3}
                  />
               </Link>
            </div>
            <div className=" single-project-image col-sm-6 col-xm-12 ">
               <Link className="text-xm" to="/projects/PlantManager">
                  <SingleProject
                     color="black"
                     projectName={"Plant Manager"}
                     className="img"
                     img={project4}
                  />
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Projects;
