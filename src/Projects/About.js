import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h2>About this project</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Architecto excepturi sed, voluptatum impedit, illum repellat
        debitis quasi quo quibusdam nemo mollitia, tenetur voluptates
        explicabo. Ratione fugit similique, earum consequatur atque
        ipsum, ab iste beatae nisi magni voluptatibus adipisci id
        quam.
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 35px;
  position: relative;
  h2 {
    margin-bottom: 15px;
    color: rgb(180, 180, 180);
  }
  p {
    color: rgb(150, 150, 150);
  }
`;
export default About;
