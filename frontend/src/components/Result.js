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

  // const sendTextToServer = async () => {
  //   try {
  //     const response = await fetch("http://0.0.0.0:8000/photoReview", {
  //       method: "GET",
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       setResponse(data);
  //     } else {
  //       console.error("Request failed");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred", error);
  //   }
  // };

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
      <Box> 관심사 선택</Box>
      {/* <button onClick={sendTextToServer}>Send Text</button> */}
      <Box>
        게임에서 중요하게 생각하는 키워드를 모두 골라주세요
        {downloadData.map((item, index) => (
          <li key={index}>
            게임명 : {item.name}
            게임사진 : <img src={item.imgUrl} />
            키워드 : {item.keyword}
          </li>
        ))}
      </Box>
    </>
  );
}

export default Result;

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
  //   display: flex;
  justify-content: ${(props) => props.justifycontent || "left"};
  align-items: center;
`;

const DetailWrapper = styled.div`
  dispay: flex;
  justify-content: center;
  align-items: center;
`;

const Keyword = styled.div`
  width: 400px;
  border: 3px solid #f9e000;
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
  font-size: 20px;
`;

// import React, { useState } from "react";

// function App() {

//   return (
//     <div>

//       <p>Response from server:</p>
//       {response && (
//         <ul>
//           {/* <li>
//             Image URL: <img src={response.imgUrl} alt="Product" />
//           </li> */}
//           {/* <li>
//             User Image URL: <img src={response.userImgUrl} alt="User" />
//           </li> */}
//           <li>Brand Name: {response.name}</li>
//           <li>Product Name: {response.category}</li>
//           <li>Option: {response.explain}</li>
//           {/* <li>Date: {response.date}</li>
//           <li>Price: {response.price}</li>
//           <li>Is Photo Reviewed: {response.isPhotoReviewed ? "Yes" : "No"}</li>
//           <li>거절사유 : {response.whyRejected}</li> */}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
