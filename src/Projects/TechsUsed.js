import React from "react";
import styled from "styled-components";

const TechsUsed = ({ projects }) => {
  return (
    <Container>
      <h2>Build With</h2>
      <p>Firebase</p>
      <p>React</p>
      <p>Firebase</p>
      <p>Firebase</p>
      <p>Firebase</p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 35px;
  position: relative;
  right: 15px;
  h2 {
    margin-bottom: 15px;
    margin-left: 8px;
    color: rgb(180, 180, 180);
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
