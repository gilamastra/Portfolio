import React, { useState, useEffect } from "react";
import "./projects.css";
import styled from "styled-components";
import "./SingleProject.css";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleProject({ img, projectName }) {
  return (
    <Container>
      <Div>
        <Img className="project-image" src={img} alt=""></Img>
        <div>
          <p>Click To View</p>
          <ProjectName>{projectName}</ProjectName>
        </div>
      </Div>
    </Container>
  );
}

const Container = styled.div``;
const Div = styled.div`
  width: 100%;
  position: relative;
  height: 100%;

  p {
    box-shadow: inset 0px 1px 0px 0px #e184f3;
    background: linear-gradient(to bottom, #701385 5%, #8a0da3 100%);
    background-color: #701385;
    border-radius: 6px;
    border: 1px solid #9b20b3;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    position: absolute;
    right: 15px;
    bottom: 15px;
    text-shadow: 0px 1px 0px #660c78;
    text-transform: uppercase;
    @media screen and (max-width: 1000px) {
      bottom: 25px;
    }
    :hover {
      filter: brightness(0.85);
      transition: all 0.25s;
    }
    :not(:hover) {
      filter: brightness(1);
      transition: all 0.25s;
    }
    :active {
      bottom: 14px;
    }
    @media screen and (max-width: 768px) {
      display: block;
      margin: 5px 0;
    }
  }

  Img {
    filter: brightness(0.85);
    z-index: 1;
  }
  &::before {
    display: none;
    content: "";
    z-index: 2;
    width: 0%;
    height: calc(100% - 40px);
    position: absolute;
    opacity: 0.6;
    background: black;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
  }

  &:hover {
    &::before {
      display: block;
      animation: after cubic-bezier(0.47, 0, 0.745, 0.715) 0.25s
        forwards;
      animation-delay: 0.1s;
    }

    @keyframes after {
      0% {
        width: 0%;
      }

      100% {
        width: 100%;
      }
    }
    div {
      transition: ease 250ms;
      position: relative;
      animation: animationDiv 0.25s
        cubic-bezier(0.47, 0, 0.745, 0.715) forwards;
      z-index: 1000;
      animation-delay: 0.35s;
    }
    @keyframes animationDiv {
      0% {
        transform: scale(1, 1);
      }
      100% {
        margin-right: 2.5%;
        transform: scale(1.05, 1.05);
      }
    }
  }

  &:not(:hover) {
    &::before {
      content: " ";
      display: block;
      animation: before 0.25s ease-in-out forwards;
    }

    @keyframes before {
      0% {
        width: 100%;
      }

      100% {
        width: 0%;
      }
    }
    div {
      transition: ease 250ms;
      position: relative;
      animation: animationDivLeft 0.25s
        cubic-bezier(0.47, 0, 0.745, 0.715) forwards;
      z-index: 1000;
    }
    @keyframes animationDivLeft {
      0% {
        margin-right: 2.5%;
        transform: scale(1.05, 1.05);
      }
      100% {
        margin-right: 0%;

        transform: scale(1, 1);
      }
    }
  }
`;
const Img = styled.img``;

const ProjectName = styled.h2`
  position: absolute;
  font-family: Lato !important;
  color: white;
  font-weight: 900;
  right: 15px;
  font-size: 2.5rem;
  z-index: 3;
  bottom: 70px;
  @media screen and (max-width: 1000px) {
    font-size: 1.9rem;
    z-index: 3;
    bottom: 70px;
  }
`;
export default SingleProject;
