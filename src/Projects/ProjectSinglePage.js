import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { db, storage } from "../firebase";
import { AiOutlineExport, AiOutlineGithub } from "react-icons/ai";
import styled from "styled-components";
import { AiOutlineRollback } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ClipLoader from "react-spinners/ScaleLoader";

import "slick-carousel/slick/slick-theme.css";
import TechsUsed from "./TechsUsed";
import About from "./About";
import { Link } from "react-router-dom";
import MenuProjects from "./MenuProjects";
const ProjectSinglePage = () => {
  const [images, setImages] = useState("");
  const [imageUrl, setImageUrl] = useState([""]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const projectName = useParams("project");
  const [projects, setProjects] = useState(" ");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = () => {
    db.collection("projects")
      .doc(projectName.project)
      .onSnapshot((snapshot) => {
        setProjects(snapshot.data());
      });
  };
  const fetchImages = async () => {
    let fileRef = storage.ref(`projects/${projectName.project}/`);
    let result = await fileRef.listAll().then((result) => {
      result.items.map((item) => {
        setImages(result.items);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    });
  };
  useEffect(() => {
    fetchImages();
    getProjects();

    setIsLoading(true);
  }, [MenuProjects]);

  return (
    <div style={{ height: "100%" }}>
      <Container>
        {images && (
          <div className="container">
            <MenuProjects></MenuProjects>

            <Link to="/">
              <RollbackIcon />
            </Link>
            <Title>{projects.name}</Title>
            <SubTitle>{projects.subTitle || ""}</SubTitle>

            {projects.demo && (
              <a
                href={projects.demo}
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  {" "}
                  Check the Demo {<AiOutlineExport fontSize={30} />}
                </Button>
              </a>
            )}

            <a
              href={projects.projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ButtonGit>
                {" "}
                PROJECT {<AiOutlineGithub fontSize={30} />}
              </ButtonGit>
            </a>
            <SliderContainer>
              <Carrousel {...settings}>
                {images.map((image, index) => {
                  const fullpath = image.fullPath.replaceAll(
                    "/",
                    "%2f"
                  );
                  const fullpath1 = fullpath.replace(1, index + 1);
                  return (
                    <div>
                      <ImgCarrousel
                        src={`https://firebasestorage.googleapis.com/v0/b/${image.bucket}/o/${fullpath1}?alt=media`}
                        alt=""
                      />
                    </div>
                  );
                })}{" "}
              </Carrousel>
            </SliderContainer>
            <TechsUsed projects={projects} />
            <About projects={projects} />
          </div>
        )}
      </Container>
    </div>
  );
};
const Container = styled.div`
  min-height: 105vh;
  height: 100%;
  background: rgb(33, 33, 33);
  background: linear-gradient(
    90deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(42, 42, 42, 1) 100%
  );
`;
const RollbackIcon = styled(AiOutlineRollback)`
  color: rgb(180, 180, 180);
  font-size: 35px;
  z-index: 10000;
  margin-top: 5px;
  background: black;
  cursor: pointer;
  position: fixed;
  box-shadow: 0px 0px 5px 0px #e184f3;
`;

const Title = styled.h2`
  color: rgb(181, 181, 181);
  font-family: "Lato" !important;
  padding-top: 60px;
  font-weight: 900;
  font-size: 51px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const SubTitle = styled.h2`
  color: rgb(150, 150, 150);
  margin-top: 5px;
  font-weight: 400;
  font-size: 19px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const Button = styled.button`
  a {
    text-decoration: none;
    color: unset;
  }
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
  text-shadow: 0px 1px 0px #660c78;
  text-transform: uppercase;
  :hover {
    filter: brightness(0.85);
    transition: all 0.25s;
    position: relative;
  }
  :not(:hover) {
    filter: brightness(1);
    transition: all 0.25s;
  }
  :active {
    position: relative;
    top: 1px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    margin: 5px 0;
  }
`;

const ButtonGit = styled.button`
  box-shadow: inset 0px 1px 0px 0px #e184f3;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid #a511c0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  margin-left: 15px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #9b14b3;
  :hover {
    filter: brightness(0.85);
    transition: all 0.25s;
    position: relative;
  }
  :not(:hover) {
    filter: brightness(1);
    transition: all 0.25s;
  }
  :active {
    position: relative;
    top: 1px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    margin: 15px 0;
  }
`;
const SliderContainer = styled.div``;
const Carrousel = styled(Slider)`
  width: 80%;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-self: center;
    margin: 25px auto;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  button::before {
    color: white !important;
  }

  margin-top: 25px;
  .slick-list {
  }
`;
const ImgCarrousel = styled.img`
  max-height: 600px;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: rgb(0 0 0 /20%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  width: 100% !important;
  z-index: 10;

  height: 100%;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  background: #0f0017;
  align-items: center;
  height: 100vh;
`;
export default ProjectSinglePage;
