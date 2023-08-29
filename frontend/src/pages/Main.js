import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import MainImg from "../images/MainImg.png";

function Main() {
  return (
    <>
      <Navbar />
      <ProductImg src={MainImg} />
    </>
  );
}

const BannerImg = styled.img`
  width: 100%;
`;

const ProductImg = styled.img`
  margin-left: 5%;
  width: 90%;
`;

export default Main;
