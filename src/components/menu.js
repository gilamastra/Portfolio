import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-scroll";
import SidebarData from "./SidebarData";

import "./menu.css";
import { icons } from "react-icons/lib";
function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="menuContainer">
      <div className="navbar">
        <Link
          to="#"
          style={{ cursor: "pointer" }}
          className="menu-bars"
        >
          <FaIcons.FaBars
            style={{ color: "#ccc" }}
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link
              smooth={true}
              duration={1000}
              style={{ cursor: "pointer" }}
              onClick={showSidebar}
              to="#"
              className="menu-bars"
            >
              <AiIcons.AiOutlineClose style={{ color: "#ccc" }} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link smooth={true} duration={1000} to={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
