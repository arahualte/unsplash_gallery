import React from "react";
import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: "Oswald", sans-sherif;
  margin-bottom: 2rem;
`;

export const Heading = () => {
  return (
    <Header>
      <H1> React Unsplash Gallery</H1>
    </Header>
  );
};
