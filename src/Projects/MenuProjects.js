import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import SidebarData from "../components/SidebarData";
import netflixLogo from "../img/netflixProjectPicture1.png";
import slackLogo from "../img/SlackClone1.png";

import "./menuProjects.css";
import { icons } from "react-icons/lib";
function MenuProjects({}) {
  const [sidebar, setSidebar] = useState(true);
  const history = useHistory();

  const showSidebar = ({}) => {
    setSidebar(!sidebar);
  };
  return (
    <div className="menuContainer-projects">
      <div className="navbar-projects">
        <Link
          to="#"
          style={{ cursor: "pointer" }}
          className="menu-bars-projects"
        >
          <FaIcons.FaBars
            style={{ color: "#ccc" }}
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav
        className={
          sidebar ? "nav-menu active-projects" : "nav-menu-projects"
        }
      >
        <ul className="nav-menu-items-projects">
          <li className="navbar-toggle-projects">
            <Link
              smooth={true}
              duration={1000}
              style={{ cursor: "pointer" }}
              onClick={showSidebar}
              to="#"
              className="menu-bars-projects"
            >
              <AiIcons.AiOutlineClose style={{ color: "#ccc" }} />
            </Link>
          </li>
          <div
            className="projectSingle-menu"
            onClick={() => {
              history.push("NetflixClone");
              window.location.reload();
            }}
          >
            <h1>Netflix Clone</h1>
          </div>
          <div
            onClick={() => {
              history.push("SlackClone");
              window.location.reload();
            }}
            className="projectSingle-menu"
          >
            <h1>Slack Clone</h1>
          </div>{" "}
          <div
            onClick={() => {
              history.push("PlantManager");
              window.location.reload();
            }}
            className="projectSingle-menu"
          >
            <h1>Plant Manager</h1>
          </div>{" "}
        </ul>
      </nav>
    </div>
  );
}

export default MenuProjects;
