import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skills.css";
import { AiFillHtml5 } from "react-icons/ai";

import {
  FaCss3,
  FaDatabase,
  FaGit,
  FaGitAlt,
  FaJs,
  FaWordpress,
  FaWordpressSimple,
} from "react-icons/fa";
import { Link } from "react-scroll";

function skills() {
  return (
    <div id="skills" className="skills">
      <div className="container   ">
        <h2 className="skills-title">Skills</h2>

        <div className=" row text-center mt-5 ">
          <div className="col-sm-4 mt-5 ">
            <AiFillHtml5 className="skills-icon" />
            <p className="skills-iconTitle">HTML-5</p>
            <p className="skills-iconSubTitle"></p>
          </div>
          <div className="col-sm-4 mt-5">
            <FaCss3 className="skills-icon" />
            <p className="skills-iconTitle">CSS-3</p>
            <p className="skills-iconSubTitle">
              Styled Components, Bootstrap, Materialize
            </p>
          </div>
          <div className="col-sm-4 mt-5">
            <FaJs className="skills-icon" />
            <p className="skills-iconTitle">JavaScript</p>
            <p className="skills-iconSubTitle">
              React, React Native, Node.js
            </p>
          </div>
        </div>

        <div className="row text-center mt-5 ">
          <div className="col-sm-4 mb-5  ">
            <FaDatabase className="skills-icon" />
            <p className="skills-iconTitle">DataBases</p>

            <p className="skills-iconSubTitle">
              Firebase, PostreSQL, MySQL
            </p>
          </div>
          <div className="col-sm-4 mb-5">
            <FaGitAlt className="skills-icon" />
            <p className="skills-iconSubTitle">Version Control</p>
          </div>
          <div className="col-sm-4">
            <FaWordpressSimple className="skills-icon" />
            <p className="skills-iconSubTitle">WordPress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
