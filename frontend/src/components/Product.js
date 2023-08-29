import React, { useState } from "react";
import styled from "styled-components";
// import ExProduct from "../images/ExProduct.png";
import ReviewModal from "./ReviewModal";

function Product() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // 추가: 선택된 데이터를 저장하는 상태

  const showModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  return (
    <Wrapper>
      <DetailWrapper margintop="13%">
        <ProductDetail fontSize="32px" fontWeight="800">
          나를 위한 게임 추천 받기
        </ProductDetail>
      </DetailWrapper>
      <DetailWrapper margintop="1%">
        <ProductDetail>다양한 키워드와 나의 관심사에 맞게</ProductDetail>
        <ProductDetail>새로운 게임을 추천해드립니다. </ProductDetail>
        <ProductDetail>
          지금 바로 나를 위한 게임을 추천 받아보세요!
        </ProductDetail>
      </DetailWrapper>
      <DetailWrapper margintop="1%">
        <ReviewButton onClick={() => showModal()}>
          추천게임 확인하기
        </ReviewButton>
        {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
      </DetailWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  height: 100%;
  color: black;
  font-size: 32px;
  padding: 15px;
  margin: 6px 12px;
`;

const PhotoWrapper = styled.img`
  width: 160px;
  height: 190px;
`;

const DetailWrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  margin-top: ${(props) => props.margintop || "0px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductDetail = styled.div`
  margin-top: ${(props) => props.margintop || "0px"};
  margin-bottom: ${(props) => props.marginbottom || "10px"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "28px"};
  font-weight: ${(props) => props.fontWeight || "28px"};
`;

const ReviewButton = styled.button`
  width: 240px;
  height: 50px;
  margin: 5px;
  font-size: 20px;
  color: black;
  background-color: #f9e000;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
`;

export default Product;
