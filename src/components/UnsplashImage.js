import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  filter: grayscale(100%);
  filter: saturate(0);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0);
    filter: saturate(1.5);
    box-shadow: 0px 0px 5px;
  }
`;

export const UnsplashImage = ({ url, key }) => {
  return (
    <>
      <Img key={key} src={url} alt=""></Img>
    </>
  );
};
