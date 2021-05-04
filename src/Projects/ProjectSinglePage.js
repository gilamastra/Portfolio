import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { db } from "../firebase";
import styled from "styled-components";

const ProjectSinglePage = () => {
  const projectName = useParams("project");
  const [projects, setProjects] = useState(" ");
  const history = useHistory();

  const getProjects = () => {
    db.collection("projects")
      .doc(projectName.project)
      .onSnapshot((snapshot) => {
        setProjects(snapshot.data());
      });
  };
  useEffect(() => {
    if (projectName) {
      getProjects();
    }
  }, []);

  console.log(projectName);
  return (
    <div>
      {projects && (
        <div className="container">
          <Container>
            <h2>{projects.name}</h2>
            <p>{projects.description}</p>
          </Container>
        </div>
      )}
    </div>
  );
};
const Container = styled.div`
  h2 {
    color: rgb(181, 181, 181);
    font-family: "Lato" !important;
    margin-top: 60px;
    font-weight: 900;
    font-size: 51px;
  }
`;

export default ProjectSinglePage;
