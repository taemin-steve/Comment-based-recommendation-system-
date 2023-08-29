import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import HamburgerBar from "../images/HamburgerBar.png";
import Cancel from "../images/Cancel.png";
import NavImg from "../images/NavImg.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon>
          <ImgIcon src={HamburgerBar} />
        </MenuIcon>
      </MenuButton>
      <Img src={NavImg} />
      {/* <AHref href="/">
        <LogoWrapper src={Musinsa} />
      </AHref> */}
      <SidebarWrapper open={isMenuOpen}>
        <SidebarContent>
          <CloseButton onClick={toggleMenu}>
            <ImgIcon src={Cancel} />
          </CloseButton>
          <MenuItem margintop={"115px"}>마이페이지</MenuItem>
          <hr />
          <MenuDetail margin="10px 0 0 0">신규게임</MenuDetail>
          <MenuItem>
            <MenuDetail margin="0 0 0 0px" fontSize="16px">
              <AHref href="/Recommend">추천게임</AHref>
            </MenuDetail>
            <MenuDetail margin="0 12px" fontSize="16px">
              |
            </MenuDetail>
            <MenuDetail margin="0" fontSize="16px">
              <AHref href="/NewTOP">신규TOP100</AHref>
            </MenuDetail>
          </MenuItem>
          <hr />
          <MenuItem>모바일게임</MenuItem>
          <hr />
          <MenuItem>사전예약</MenuItem>
          <hr />
          <MenuItem>쿠폰함</MenuItem>
        </SidebarContent>
      </SidebarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  color: white;
  height: 100px;
`;
const Img = styled.img`
  width: 90%;
  margin: 2% 0 0 10%;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 32px;
  left: 12px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MenuIcon = styled.span`
  display: flex;
  white-space: no-wrap;
  font-size: 24px;
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 80%;
  max-width: 32%;
  height: 100%;
  background-color: black;
  color: white;
  transition: left 0.5s ease-in-out;
  z-index: 999;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const SidebarContent = styled.div`
  padding: 20px;
  animation: ${slideIn} 0.7s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const MenuItem = styled.div`
  top: 10px;
  margin-top: ${(props) => props.margintop || "0px"};
  padding: 4px 0px;
  font-size: ${(props) => props.fontSize || "24px"};
  display: flex;
`;

const MenuDetail = styled.p`
  margin: ${(props) => props.margin || "10px 0"};
  font-size: ${(props) => props.fontSize || "24px"}; ;
`;

const ImgIcon = styled.img`
  margin: 4px 0 0 8px;
  width: 30px;
`;

const AHref = styled.a`
  color: white;
  text-decoration-line: none;
`;

export default Navbar;
