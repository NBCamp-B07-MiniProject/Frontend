import React, { useState } from 'react';
import { styled } from "styled-components";
import 박상율 from "../img/박상율.png"
import 윤재훈 from "../img/윤재훈.png"
import 이상준 from "../img/이상준.png"
import 지현구 from "../img/지현구.png"
import 고광주 from "../img/고광주.png"


const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // 모달을 열고 닫는 함수
  const toggleModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <CardContainer>
        <Card1 onClick={() => toggleModal(박상율)}>
          <img src={박상율} alt="박상율" />
        </Card1>
        <Card1 onClick={() => toggleModal(윤재훈)}>
          <img src={윤재훈} alt="윤재훈" />
        </Card1>
        <Card1 onClick={() => toggleModal(이상준)}>
          <img src={이상준} alt="이상준" />
        </Card1>
        <Card1 onClick={() => toggleModal(지현구)}>
          <img src={지현구} alt="지현구" />
        </Card1>
        <Card1 onClick={() => toggleModal(고광주)}>
          <img src={고광주} alt="고광주" />
        </Card1>
      </CardContainer>
      
      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <Modal>
          {/* 모달 내용 */}
          <ModalContent>
            {/* 모달 내용을 원하는 대로 구성하세요 */}
            {/* 예를 들어, 이미지를 표시하거나 내용을 추가할 수 있습니다 */}
            <img src={modalImage} alt="모달 이미지" />
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
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 1300px;
  height: 500px;
  display: flex;
`;

const CloseButton = styled.button`
  background-color: #D9D9D9;
  height: 40px;
  width: 80px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-left: auto;
  margin-top: auto;
`;