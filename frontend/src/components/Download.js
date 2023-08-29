import React, { useState, useEffect } from "react";
import styled from "styled-components";
import X from "../images/X.png";
import xOver from "../images/XOver.png";
import Yellow from "../images/Yellow.png";
import Green from "../images/Green.png";

function Download({ setModalOpen }) {
  const sampleComment = [
    {
      comment:
        "우선 너무 재밌고 딸들이 정말 귀엽습니다 쥬얼을 주는 이벤트도 많고 꼭 필요한 서포트 카드를 제공해주는 이벤트도 많지만 그것만으론 한계점이 오는 부분이 분명한 것 같아요(평점 A~A+정도?) 그 한계선을 넘기 위해선 아무래도 현질이 좀 많이 필요한 것 같아요 사랑하는 딸들인데 계속 평점이 오르지 못하면 아무래도 맘이 아파서 그만두게 됩니다... 육성 시스템에는 크게 문제가 없지만 좀 더 꾸준히 하면 성장할 수 있는 기반이 있으면 좋겠습니다",
    },
    {
      comment:
        "아직까진 재밌는데 컨텐츠를 어떻게 유지할 건지가 관건인 듯. 게임 초반인데도 컨텐츠가 조금 적다고 느껴짐. 또 육성할 때 턴수가 어떻게 설정되는 건지 궁금하고 미션 실패시(5착 이내, 3착 이내 같은 미션) 0턴에서 다시 깨는 것보단 2턴 정도에서 다시 돌아왔으면 좋았을 듯. 그리고 네트워크 원활한데 튕길 때가 종종 있음. 이건 아직 서버 안정화가 덜 돼서 그런 거 같은데 계속 그러면 게임이 금방 질릴 수 밖에 없는 요소가 되기 때문에 하루 빨리 고쳐야 될 듯.",
    },
    {
      comment:
        "생소한 장르라서 어려울거라 생각했는데 번역과 튜토리얼도 나름 잘 되어있었고 육성방식은 예전에 즐겨했던 파워프로 석세스 시리즈가 종종 생각나서 즐겁게 플레이하고 있습니다. 레이스 라이브 연출은 정말 압권이네요, 항상 그렇지만 아무리 재미있고 좋은 작품이라도 운영이 엉망이 되면 실패할 수 있으니 잘 해주셔서 장기간 서비스 할 수 있었으면 좋겠습니다. 우마무스메 화이팅!!",
    },
    {
      comment:
        "갓겜. 주로 이벤트와 팀레 캐릭터 육성할 때에만 몰아서 바짝하는 편이지만, 반복되는 컨텐츠 속에서도 꾸준하게 새로움이 느껴질 때가 있습니다. 이전에 논란이 되었을 당시를 항상 되새기며 앞으로도 꾸준히 지금과 같은 운영만 유지되어도 감사할 것 같습니다. 추가로 각종 행사 부스 참여와 한국 서버 전용 이벤트도 열어주셔서 감사합니다. 요새는 이 게임 안하는 지인들에게 얘기를 해도 과거의 논란 같은 이야기가 전혀 안나오고 긍정적인 시선으로 봐줘서 좋아요.",
    },
    {
      comment:
        "게임성 자체는 재미있습니다. 하지만 운영이 이건 정말 해도해도 너무합니다. 무과금을 지영하지만, 과금의 유혹에 흔들릴 때가 많습니다. 그정도로 좋은 게임성을 가지고 있음에도 작금의 운영진의 행태가 너무 아쉽습니다. 사이게임즈는 퍼블리셔를 교체하는 강수도 검토해주시길 바랍니다.",
    },
  ];
  const sampleDownload = [
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/9jxg-2019-06-13/14-32-21-238/appIcon.png",
      name: "애니팡",
      category: "",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/6ztk-2020-06-25/11-28-16-869/appIcon.png",
      name: "오목",
      category: "",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/o7gg-2023-06-08/09-02-36-034/appIcon.png",
      name: "메이플스토리M",
      category: "",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/yt5p-2021-06-25/00-19-48-939/appIcon.jpeg",
      name: "오딘: 발할라 라이징",
      category: "",
    },
  ];
  // const DownloadList = [
  //   {
  //     imgUrl:
  //       "https://playgame-img.kakaogames.com/production/images/j6jp-2022-09-13/18-53-48-050/appIcon.jpeg",
  //     name: "천애명월도M",
  //     category: "",
  //   },
  //   {
  //     imgUrl:
  //       "https://playgame-img.kakaogames.com/production/images/t0u3-2022-06-16/16-34-54-372/appIcon.jpeg",
  //     name: "우마무스메 프리티 더비",
  //     category: "",
  //   },
  //   {
  //     imgUrl:
  //       "https://playgame-img.kakaogames.com/production/images/k5u0-2021-09-07/14-30-15-789/appIcon.png",
  //     name: "월드 플리퍼",
  //     category: "",
  //   },
  //   {
  //     imgUrl:
  //       "https://playgame-img.kakaogames.com/production/images/k5u0-2021-09-07/14-30-15-789/appIcon.png",
  //     name: "월드 플리퍼",
  //     category: "",
  //   },
  // ];
  const [xImg, setXImg] = useState(false);

  // 서버로 데이터를 보내는 함수
  // const sendDataToServer = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         DownloadList,
  //       }),
  //     });

  //     if (response.ok) {
  //       // 데이터가 성공적으로 전송되었습니다. 필요한 경우 응답을 처리할 수 있습니다.
  //       console.log("데이터 전송 성공");
  //     } else {
  //       console.error("서버로 데이터 전송 중 오류 발생");
  //     }
  //   } catch (error) {
  //     console.error("서버로 데이터 전송 중 오류 발생:", error);
  //   }
  // };

  const closeModal = () => {
    setModalOpen(false);
  };
  const submitData = async () => {
    closeModal();
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
      <Box textalign="center" lineheight="40px">
        {" "}
        나를 위한 게임 추천 받기
      </Box>
      <Box>
        다운로드한 게임
        <Detail>
          {sampleDownload.map((el, index) => (
            <DetailWrapper key={index}>
              <PhotoWrapper src={el.imgUrl} />
              <Box fontSize="16px" height="20px" minheight="10px">
                {el.name}
              </Box>
            </DetailWrapper>
          ))}
        </Detail>
      </Box>
      <Box>
        {" "}
        작성한 댓글
        <CommentsContainer>
          {sampleComment.map((el, index) => (
            <Comment key={index}>{el.comment}</Comment>
          ))}
        </CommentsContainer>
        {/* <button onClick={sendDataToServer}>데이터 서버로 전송</button> */}
      </Box>
      {/* <Box onClick={submitData} justifycontent="center">
        관심사 선택하기
      </Box> */}
    </>
  );
}

export default Download;

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
  margin: ${(props) => props.margin || "8px"};
  border-radius: 5px;
  height: ${(props) => props.height || "auto"};
  min-height: ${(props) => props.minheight || "48px"};
  font-size: ${(props) => props.fontSize || "24px"};
  padding: 5px;
  //   display: flex;
  justify-content: ${(props) => props.justifycontent || "left"};
  align-items: center;
  text-align: ${(props) => props.textalign || "left"};
  line-height: ${(props) => props.lineheight};
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
  margin: 0 10px; /* 각 게임 아이템 사이의 간격 조절 */
`;

const CommentsContainer = styled.div`
  max-height: 200px; /* 원하는 최대 높이 설정 */
  overflow: auto; /* 스크롤 적용 */
`;
const Comment = styled.div`
  font-size: 16px;
  margin: 10px 20px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px;
`;
