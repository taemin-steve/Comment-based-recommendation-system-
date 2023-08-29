import React, { useState } from "react";
import styled from "styled-components";
import X from "../images/X.png";
import xOver from "../images/XOver.png";
import Yellow from "../images/Yellow.png";
import Green from "../images/Green.png";

function ChooseCategory({ setModalOpen }) {
  const sampleCategory = [
    "# 아이템이 다양해요",
    "# 컨탠츠가 많아요",
    "# 그래픽이 화려해요",
    "# 아이템이 다양해요",
    "# 컨탠츠가 많아요",
    "# 그래픽이 화려해요",
    "# 아이템이 다양해요",
    "# 컨탠츠가 많아요",
    "# 그래픽이 화려해요",
    "# 아이템이 다양해요",
    "# 컨탠츠가 많아요",
    "# 그래픽이 화려해요",
    "# 아이템이 다양해요",
    "# 컨탠츠가 많아요",
    "# 그래픽이 화려해요",
    "# 아이템이 다양해요",
    "# 컨탠츠가 많아요",
    "# 그래픽이 화려해요",
    "# 아이템이 다양해요",
    "# 컨탠츠가 많아요",
    "# 그래픽이 화려해요",
  ];
  const [xImg, setXImg] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <>
      <Top>
        <XButton
          onMouseOver={() => setXImg(true)}
          onMouseOut={() => setXImg(false)}
          src={xImg ? xOver : X}
          onClick={closeModal}
        />
        <XButton margin="4px 0 0 8px" src={Yellow} />
        <XButton margin="4px 0 0 8px" src={Green} />
      </Top>
      <Box height="56px" lineheight="56px">
        관심사 선택
      </Box>
      <KeywordsContainer>
        <DIV>sdklsaklsadmlkadsmk</DIV>
        {sampleCategory.map((el, index) => (
          <KeywordWrapper
            key={index}
            isselected={selectedCategories.includes(el) ? "true" : "false"}
            onClick={() => toggleCategory(el)}
          >
            <Keyword>{el}</Keyword>
          </KeywordWrapper>
        ))}
      </KeywordsContainer>
    </>
  );
}

export default ChooseCategory;

const KeywordsContainer = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  margin: 8px;
  border-radius: 5px;
`;

const DIV = styled.div`
  width: 100%;
`;

const KeywordWrapper = styled.div`
  // width: calc(30% - 10px);
  height: 30px;
  width: 23-px;
  line-height: 30px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#F9E000" : "transparent"};
  border: 3px solid #f9e000;
  // ${({ isSelected }) => (isSelected ? "transparent" : "#F9E000")};
  border-radius: 20px;
  margin: 10px;
  padding: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9e000;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  max-width: 800px;
  width: 70%;
  height: auto;
  border-radius: 5px;
  background-color: #eeeeee;
  top: 100px;
  left: 15%;
`;

const Top = styled.div`
  background-color: #555555;
  border-radius: 5px 5px 0 0;
  height: 36px;
  display: flex;
  align-items: center;
  jsutify-content: center;
`;

const XButton = styled.img`
  width: 12px;
  height: 12px;
  margin: ${(props) => props.margin || "4px 0 0 15px"};
`;

const Box = styled.div`
  background-color: ${(props) => props.backgroundcolor || "white"};
  margin: 8px;
  border-radius: 5px;
  height: ${(props) => props.height || "auto"};
  font-size: 24px;
  justify-content: ${(props) => props.justifycontent || "left"};
  align-items: center;
  line-height: ${(props) => props.lineheight};
  text-align: center;
`;

const Keyword = styled.div`
  // width: 400px;
  font-size: 20px;
  text-align: center;
`;
