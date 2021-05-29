import React from "react";
import styled from "styled-components";

const About = ({ projects }) => {
  return (
    <Container>
      <h2>About this project</h2>
      <p>{projects.description}</p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 35px;
  height: 100%;
  position: relative;
  padding-bottom: 35px;
  h2 {
    margin-bottom: 15px;
    color: rgb(180, 180, 180);
  }
  p {
    font-size: 20px;
    max-width: 800px;
    color: rgb(150, 150, 150);
  }
`;
export default About;
