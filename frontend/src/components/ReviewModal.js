import React, { useState } from "react";
import styled from "styled-components";

import Download from "../components/Download";
import ChooseCategory from "./ChooseCategory";
import Result from "./Result";

function ReviewModal({ setModalOpen }) {
  const [xImg, setXImg] = useState(false);
  const [modalCounter, setModalCounter] = useState(0);
  const [isAddCategory, setIsAddCategory] = useState(0);
  const closeModal = () => {
    setModalOpen(false);
  };

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
        "https://playgame-img.kakaogames.com/production/images/j6jp-2022-09-13/18-53-48-050/appIcon.jpeg",
      name: "천애명월도M",
      keyword: "",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/t0u3-2022-06-16/16-34-54-372/appIcon.jpeg",
      name: "우마무스메 프리티 더비",
      keyword: "",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/k5u0-2021-09-07/14-30-15-789/appIcon.png",
      name: "월드 플리퍼",
      keyword: "ㅁㅁ",
    },
    {
      imgUrl:
        "https://playgame-img.kakaogames.com/production/images/k5u0-2021-09-07/14-30-15-789/appIcon.png",
      name: "월드 플리퍼",
      keyword: "",
    },
  ];

  const DownloadList = [
    {
      name: "천애명월도M",
    },
    {
      name: "천애명월도M",
    },
    {
      name: "천애명월도M",
    },
    {
      name: "천애명월도M",
    },
  ];

  const sendDataToServer = async () => {
    try {
      const response = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          DownloadList,
        }),
      });

      if (response.ok) {
        // 데이터가 성공적으로 전송되었습니다. 필요한 경우 응답을 처리할 수 있습니다.
        console.log("데이터 전송 성공");
      } else {
        console.error("서버로 데이터 전송 중 오류 발생");
      }
    } catch (error) {
      console.error("서버로 데이터 전송 중 오류 발생:", error);
    }
  };

  const submitData = async () => {
    if (modalCounter === 0) sendDataToServer();
    setModalCounter(modalCounter + 1);
    setIsAddCategory(isAddCategory + 1);

    // {modalCounter === 0 ?
    //   sendDataToServer()
    //  :  <ChooseCategory setModalOpen={setModalOpen} />
    // sampleDownload.length <= 3 && isAddCategory === 1 ? (
    //   <ChooseCategory setModalOpen={setModalOpen} />
    // ) : (
    //   <Result setModalOpen={setModalOpen} />
    // )}
    // if (sampleDownload.length <= 3 && isAddCategory === 1) closeModal();
    // closeModal();
  };

  return (
    <Wrapper>
      {modalCounter === 0 ? (
        <Download setModalOpen={setModalOpen} />
      ) : // <ChooseCategory setModalOpen={setModalOpen} />
      sampleDownload.length <= 3 && isAddCategory === 1 ? (
        <ChooseCategory setModalOpen={setModalOpen} />
      ) : (
        <Result setModalOpen={setModalOpen} />
      )}
      <Box onClick={submitData} justifycontent="center">
        관심사 선택하기
      </Box>
    </Wrapper>
  );
}

export default ReviewModal;

const Wrapper = styled.div`
  position: absolute;
  max-width: 800px;
  width: 70%;
  height: auto;
  border-radius: 5px;
  background-color: #eeeeee;
  top: 30%; /* 화면 세로 중앙 */
  left: 50%; /* 화면 가로 중앙 */
  transform: translate(-50%, -50%); /* 화면 중앙 정렬 */
`;

const Box = styled.div`
  background-color: ${(props) => props.backgroundcolor || "white"};
  margin: 8px;
  border-radius: 5px;
  height: ${(props) => props.height || "48px"};
  font-size: 24px;
  display: flex;
  justify-content: ${(props) => props.justifycontent || "left"};
  align-items: center;
`;
