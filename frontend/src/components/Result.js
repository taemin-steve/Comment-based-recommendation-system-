import React, { useState, useEffect } from "react";
import styled from "styled-components";
import X from "../images/X.png";
import xOver from "../images/XOver.png";
import Yellow from "../images/Yellow.png";
import Green from "../images/Green.png";

function Result({ setModalOpen }) {
  const [xImg, setXImg] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const submitData = async () => {
    closeModal();
  };

  const [response, setResponse] = useState(null);
  const [downloadData, setDownloadData] = useState([]);

  useEffect(() => {
    // 서버에서 데이터 가져오기
    fetch("http://localhost:8000/getSampleDownload")
      .then((response) => response.json())
      .then((data) => setDownloadData(data))
      .catch((error) => console.error("데이터 가져오기 실패:", error));
  }, []);

  // 키워드를 쉼표로 분리하여 배열로 만드는 함수
  const parseKeywords = (keywords) => {
    return keywords.replace(/\[|\]|'/g, "").split(",");
  };

  const sampleDownload = [
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/9jxg-2019-06-13/14-32-21-238/appIcon.png",
      name: "애니팡",
      category:
        "['슈트', '그래픽', 'sf', 'pc', '재미', '아레스', '타격감', '리니지', '필드', '최적화']",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/6ztk-2020-06-25/11-28-16-869/appIcon.png",
      name: "오목",
      category:
        "['미르4', '그래픽', '미르', '채집', '토벌', '컨텐츠', '진행', '마방진', '기연', '정도']",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/o7gg-2023-06-08/09-02-36-034/appIcon.png",
      name: "메이플스토리M",
      category:
        "['영지', '에버', '스토리', '소울', '정령', '캐릭터', '컨텐츠', '모델링', '전투', '재화']",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/yt5p-2021-06-25/00-19-48-939/appIcon.jpeg",
      name: "오딘: 발할라 라이징",
      category:
        "['리니지', '아키에이지', '오딘', '그래픽', '사냥', '작업장', '리니지2', '퀘스트', '탈것', '과금']",
    },
  ];

  return (
    <>
      <Top>
        <XButton
          onMouseOver={() => setXImg(true)}
          onMouseOut={() => setXImg(false)}
          src={xImg ? xOver : X}
          onClick={closeModal}
        />
        <XButton margin="0 0 0 8px" src={Yellow} />
        <XButton margin="20px 0 0 8px" src={Green} />
      </Top>
      {/* <Box height="56px" lineheight="56px" textalign="center">
        {" "}
        결과보기
      </Box> */}
      <Box height="250px" overflowy="auto">
        다운로드
        <ColumnsContainer>
          {sampleDownload.map((item, index) => (
            <RecWrapper key={index}>
              <Img src={item.imgUrl} />
              <Div>
                <div>{item.name}</div>
                {/* 키워드를 파싱하여 개별적으로 표시 */}
                <SmallDiv>
                  {parseKeywords(item.category).map((keyword, keywordIndex) => (
                    <Keyword key={keywordIndex}># {keyword.trim()}</Keyword>
                  ))}
                </SmallDiv>
              </Div>
            </RecWrapper>
          ))}
        </ColumnsContainer>
      </Box>
      <Box height="300px">
        추천목록
        {downloadData.map((item, index) => (
          <RecWrapper key={index}>
            <Img src={item.imgUrl} />
            <Div>
              <SmallDiv>{item.name}</SmallDiv>
              {/* 키워드를 파싱하여 개별적으로 표시 */}
              <SmallDiv>
                {parseKeywords(item.keyword).map((keyword, keywordIndex) => (
                  <Keyword key={keywordIndex}># {keyword.trim()}</Keyword>
                ))}
              </SmallDiv>
            </Div>
          </RecWrapper>
        ))}
      </Box>
    </>
  );
}

export default Result;

const Top = styled.div`
  background-color: #555555;
  border-radius: 5px 5px 0 0;
  height: 36px;
`;

const XButton = styled.img`
  width: 12px;
  height: 12px;
  margin: ${(props) => props.margin || "0 0 0 15px"};
`;

const Box = styled.div`
  background-color: ${(props) => props.backgroundcolor || "white"};
  margin: ${(props) => props.margin || "8px"};
  border-radius: 5px;
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minheight || "48px"};
  font-size: ${(props) => props.fontSize || "24px"};
  padding: 5px;
  text-align: ${(props) => props.textalign || "left"};
  line-height: ${(props) => props.lineheight};
  overflow-y: ${(props) => props.overflowy};
`;

const Img = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 20px;
  margin: 0 10px 0 10px;
`;

const RecWrapper = styled.div`
  display: flex;
  width: 40%;
  margin: 10px 0;
  max-height: 200px;
`;

const Div = styled.div`
  margin-top: ${(props) => props.margintop || "0px"};
`;

const SmallDiv = styled.div`
  margin-top: ${(props) => props.margintop || "12px"};
`;

const Keyword = styled.a`
  border-radius: 4px;
  // padding: 2px 8px;
  margin-right: 2px;
  // margin-bottom: 2px;
  font-size: 16px;
  color: #777777;
`;

const PhotoWrapper = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 20px;
`;
const Detail = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: 10px;
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px; /* 각 게임 아이템 사이의 간격 조절 `;
const ColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* You can adjust this for spacing between columns */

  /* Set the width for each column, considering the margin */
  & > div {
    flex-basis: calc(
      50% - 20px
    ); /* 50% width with a margin of 10px on each side */
    margin-bottom: 20px; /* Adjust the margin as needed */
  }
`;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import X from "../images/X.png";
// import xOver from "../images/XOver.png";
// import Yellow from "../images/Yellow.png";
// import Green from "../images/Green.png";

// function Result({ setModalOpen }) {
//   const [xImg, setXImg] = useState(false);
//   const closeModal = () => {
//     setModalOpen(false);
//   };
//   const submitData = async () => {
//     closeModal();
//   };

//   const [response, setResponse] = useState(null);
//   const [downloadData, setDownloadData] = useState([]);

//   useEffect(() => {
//     // 서버에서 데이터 가져오기
//     fetch("http://localhost:8000/getSampleDownload")
//       .then((response) => response.json())
//       .then((data) => setDownloadData(data))
//       .catch((error) => console.error("데이터 가져오기 실패:", error));
//   }, []);

//   // const sendTextToServer = async () => {
//   //   try {
//   //     const response = await fetch("http://0.0.0.0:8000/photoReview", {
//   //       method: "GET",
//   //     });

//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       console.log(data);
//   //       setResponse(data);
//   //     } else {
//   //       console.error("Request failed");
//   //     }
//   //   } catch (error) {
//   //     console.error("An error occurred", error);
//   //   }
//   // };

//   return (
//     <>
//       <Top>
//         <XButton
//           onMouseOver={() => setXImg(true)}
//           onMouseOut={() => setXImg(false)}
//           src={xImg ? xOver : X}
//           onClick={closeModal}
//         />
//         <XButton margin="4px 0 0 8px" src={Yellow} />
//         <XButton margin="4px 0 0 8px" src={Green} />
//       </Top>
//       <Box> 관심사 선택</Box>
//       {/* <button onClick={sendTextToServer}>Send Text</button> */}
//       <Box>
//         게임에서 중요하게 생각하는 키워드를 모두 골라주세요
//         {downloadData.map((item, index) => (
//           <li key={index}>
//             게임명 : {item.name}
//             게임사진 : <img src={item.imgUrl} />
//             키워드 : {item.keyword}
//           </li>
//         ))}
//       </Box>
//     </>
//   );
// }

// export default Result;

// const Wrapper = styled.div`
//   position: absolute;
//   max-width: 800px;
//   width: 70%;
//   height: auto;
//   border-radius: 5px;
//   background-color: #eeeeee;
//   top: 100px;
//   left: 15%;
// `;

// const Top = styled.div`
//   background-color: #555555;
//   border-radius: 5px 5px 0 0;
//   height: 36px;
//   display: flex;
//   align-items: center;
//   jsutify-content: center;
// `;

// const XButton = styled.img`
//   width: 12px;
//   height: 12px;
//   margin: ${(props) => props.margin || "4px 0 0 15px"};
// `;

// const Box = styled.div`
//   background-color: ${(props) => props.backgroundcolor || "white"};
//   margin: 8px;
//   border-radius: 5px;
//   height: ${(props) => props.height || "auto"};
//   font-size: 24px;
//   //   display: flex;
//   justify-content: ${(props) => props.justifycontent || "left"};
//   align-items: center;
// `;

// const DetailWrapper = styled.div`
//   dispay: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Keyword = styled.div`
//   width: 400px;
//   border: 3px solid #f9e000;
//   border-radius: 20px;
//   margin: 5px;
//   padding: 5px;
//   font-size: 20px;
// `;

// // import React, { useState } from "react";

// // function App() {

// //   return (
// //     <div>

// //       <p>Response from server:</p>
// //       {response && (
// //         <ul>
// //           {/* <li>
// //             Image URL: <img src={response.imgUrl} alt="Product" />
// //           </li> */}
// //           {/* <li>
// //             User Image URL: <img src={response.userImgUrl} alt="User" />
// //           </li> */}
// //           <li>Brand Name: {response.name}</li>
// //           <li>Product Name: {response.category}</li>
// //           <li>Option: {response.explain}</li>
// //           {/* <li>Date: {response.date}</li>
// //           <li>Price: {response.price}</li>
// //           <li>Is Photo Reviewed: {response.isPhotoReviewed ? "Yes" : "No"}</li>
// //           <li>거절사유 : {response.whyRejected}</li> */}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
