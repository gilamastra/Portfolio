import React from "react";
import styled from "styled-components";

const TechsUsed = ({ projects }) => {
  console.log(projects.techs);
  return (
    <Container>
      <h2>Build With</h2>
      <ContainerGrid>
        {projects.techs &&
          projects.techs.map((tech, index) => {
            const techString = JSON.stringify(tech).replaceAll(
              '"',
              ""
            );
            return <p>{techString}</p>;
          })}
      </ContainerGrid>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 35px;
  position: relative;
  background-color: inherit;
  right: 15px;
  h2 {
    margin-bottom: 15px;
    margin-left: 8px;
    color: rgb(180, 180, 180);
  }
`;

const ContainerGrid = styled.div`
  margin-top: 35px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  p {
    box-shadow: inset 0px 1px 0px 0px #e184f3;
    background-color: rgb(30, 30, 30);
    border-radius: 6px;
    border: 1px solid #a511c0;
    display: inline-block;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #9b14b3;
    margin-left: 15px;
  }
`;
export default TechsUsed;
