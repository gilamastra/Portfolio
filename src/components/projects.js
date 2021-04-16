import React from 'react'
import './projects.css'
import projectsData from '../projects.json'
import SingleProject from './SingleProject'

function Projects({project1,project1Hover}) {


    return (
        <div id="projects" className="container mt-8 text-center">
            <h2 className="projects-title">Portfolio</h2>

            <div className="project-container row ">
                <div className="single-project-image col-sm  ">
                    <SingleProject className="img" imgHover={project1Hover} img={project1}/>
                </div>
                
                <div className="single-project-image col-sm col-xm-12 ">
                    <SingleProject  className="img" imgHover={project1Hover} img={project1}/>
                </div>
            </div>

            <div className=" row ">
                <div className="single-project-image col-sm col--12 ">
                    <SingleProject  className="img" imgHover={project1Hover} img={project1}/>
                </div>

                <div className="single-project-image col-sm col-xm-12 ">
                    <SingleProject  className="img" imgHover={project1Hover} img={project1}/>
                </div>
            </div>
            </div>
    )
}

export default Projects
