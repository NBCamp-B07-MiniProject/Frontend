import React, { useState } from 'react';
import { styled } from "styled-components";
import 박상율 from "../img/박상율.png"
import 윤재훈 from "../img/윤재훈.png"
import 이상준 from "../img/이상준.png"
import 지현구 from "../img/지현구.png"
import 고광주 from "../img/고광주.png"
import 상율 from "../img/박상율1.png"
import 재훈 from "../img/윤재훈1.png"
import 상준 from "../img/이상준1.png"
import 현구 from "../img/지현구1.png"
import 광주 from "../img/고광주1.png"
import 라인 from "../img/line.png"


const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // 모달을 열고 닫는 함수
  const toggleModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(!isModalOpen);
  };

    // 모달을 닫는 함수
    const closeModal = () => {
      setModalImage(null);
      setIsModalOpen(false);
    };

  return (
    <>
      <CardContainer>
        <Card1 onClick={() => toggleModal(상율)}>
          <img src={박상율} alt="상율" />
        </Card1>
        <Card1 onClick={() => toggleModal(재훈)}>
          <img src={윤재훈} alt="재훈" />
        </Card1>
        <Card1 onClick={() => toggleModal(상준)}>
          <img src={이상준} alt="상준" />
        </Card1>
        <Card1 onClick={() => toggleModal(현구)}>
          <img src={지현구} alt="현구" />
        </Card1>
        <Card1 onClick={() => toggleModal(광주)}>
          <img src={고광주} alt="광주" />
        </Card1>
      </CardContainer>
      

      {/* 모달 컴포넌트 */}
      {isModalOpen && (
          <Modal>
          {/* 모달 내용 */}
          <ModalContent>
            {/* 모달 내용을 원하는 대로 구성하세요 */}
            {/* 예를 들어, 이미지를 표시하거나 내용을 추가할 수 있습니다 */}
            <UserName>
              <ModalImagePosition img src={modalImage} alt="모달 이미지" />
              <NameTag>
                {/* 이름 */}
                박상율
              </NameTag>
              <NameTag>
                {/* 거주지역 */}
                수원
              </NameTag>
              <NameTag>
                {/* MBTI */}
                ISFP
              </NameTag>
            </UserName>
              <ModalTitle>
                자기소개 & TMI
                  <Text1>
                    나의 자기소개 및 TMI를 적어주세요
                  </Text1>
                  <Text2Content>
                    <Text2>
                      나의 각오를 적어주세요
                    </Text2>
                    <Text3Content>
                      <Text3>
                        {/* 깃허브 주소 링크 걸기 */}
                        <a href="https://github.com/hayul93" target="_blank">깃허브 주소: https://github.com/hayul93</a>
                      </Text3>
                      <Text3>
                        {/* 블로그 주소 링크 걸기 */}
                        <a href="https://dev-story93.tistory.com/" target="_blank">블로그 주소: https://dev-story93.tistory.com/</a>
                      </Text3>
                    </Text3Content>
                  </Text2Content>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                장점 & 협업스타일
                <Text1>
                  나의 장점 & 협업스타일를 적어주세요
                </Text1>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                경험
                <Text1>
                  나의 경험을 적어주세요
                </Text1>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                목표
                <Text1>
                  나의 목표를 적어주세요
                </Text1>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                취미 & 특기
                <Text1>
                  나의 취미 & 특기를 적어주세요
                </Text1>
              </ModalTitle>

                <CloseButton onClick={toggleModal}>CLOSE</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}


export default Card

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 95px;
`;

const Card1 = styled.div`
    height: 450px;
    width: 260px;
    background-color: #D9D9D9;
    border-radius: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 3px 0px 15px #c1c1c1;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;


const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 1760px;
  height: 460px;
  display: flex;
`;

const ModalImagePosition = styled.img`
  height: 260px;
  width: 260px;
  border: none;
  border-radius: 130px;
  position: static;
  display: block;
`;

const UserName = styled.div`
  height: 460px;
  width: 260px;
  border: none;
  display: block;
  position: static;
`;

const NameTag = styled.div`
  height: 50px;
  width: 250px;
  border: none;
  padding: 5px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  display: block;
  position: static;
`;


const Line = styled.div`
    height: 250px;
    width: 3px;
    background-color: black;
    display: flex;
    margin-top: 65px;
`;

const ModalTitle = styled.div`
  height: 300px;
  width: 260px;
  border: none;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  display: block;
  position: static;
`;

const Text1 = styled.div`
  margin-top: 20px;
  height: 250px;
  width: 260px;
  border: none;
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  display: block;
`;

const Text2Content = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
`;

const Text2 = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  height: 60px;
  width: 600px;
  border: none;
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  display: flex;
`;

const Text3Content = styled.div`
  width: 600px;
  height: 60px;
  display: block;
`;

const Text3 = styled.div`
  margin-top: 20px;
  height: 30px;
  width: 600px;
  border: none;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  display: flex;
`;

const Resolution = styled.div`
  height: 300px;
  width: 260px;
  border: none;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  display: block;
  position: static;
  flex-direction: column;
`;

const CloseButton = styled.button`
  margin-left: auto;
  margin-top: auto;
  background-color: #D9D9D9;
  height: 40px;
  width: 80px;
  border: none;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  font-size: 16px;
`;
