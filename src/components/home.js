import React from 'react'
import Cv from '../icons/cvv.svg'
import {AiFillGithub,AiFillLinkedin, AiOutlineFileText} from 'react-icons/ai'
import {AiFillCustomerService} from 'react-icons/ai'
import {FaDownload} from 'react-icons/fa'
import {Link} from 'react-scroll'
import './home.css'

function home() {
    return (
        <div>

         <div className = "home-container__bg"  >
          <h2 className="home-title">
            Giovani Lamastra
          </h2>
          <h3 className="home-subtitle">
              Web Developer
          </h3>
          <div className="home-list">
            <Link className="links" smooth={true} duration={1000} to="skills">skills</Link>
            <Link className="links" smooth={true} duration={1000} to="projects">projects</Link>
            <Link className="links" smooth={true} duration={1000}  to="contact">contact</Link>
          </div>
        <div className="home-icons">
            <a  href="https://github.com/gilamastra" target="blank"><AiFillGithub className="home-icon git"/></a>
          <a  href="https://www.linkedin.com/in/giovanilamastra/" target="blank"><AiFillLinkedin className="home-icon linkedin"/></a>
            <a href=""><AiOutlineFileText className="home-icon resume"/></a>  
            
        </div>
      </div>
        </div>

    )
}

export default home
