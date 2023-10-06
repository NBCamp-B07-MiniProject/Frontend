import React, { useState } from 'react';
import { styled } from 'styled-components';
import 박상율 from '../img/박상율.png';
import 윤재훈 from '../img/윤재훈.png';
import 이상준 from '../img/이상준.png';
import 지현구 from '../img/지현구.png';
import 고광주 from '../img/고광주.png';
import 상율 from '../img/박상율1.png';
import 재훈 from '../img/윤재훈1.png';
import 상준 from '../img/이상준1.png';
import 현구 from '../img/지현구1.png';
import 광주 from '../img/고광주1.png';
import 라인 from '../img/line.png';

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
              <ModalImagePosition src={modalImage} alt="모달 이미지" />
              <NameTag>
                {/* 이름 */}
                {(() => {
                  switch (modalImage) {
                    case 상율:
                      return '박상율';
                    case 재훈:
                      return '윤재훈';
                    case 상준:
                      return '이상준';
                    case 현구:
                      return '지현구';
                    default:
                      return '고광주';
                  }
                })()}
              </NameTag>
              <NameTag>
                {/* 거주지역 */}
                {(() => {
                  switch (modalImage) {
                    case 상율:
                      return '수원';
                    case 재훈:
                      return '수원';
                    case 상준:
                      return '대구';
                    case 현구:
                      return '김포';
                    default:
                      return '인천';
                  }
                })()}
              </NameTag>
              <NameTag>
                {/* MBTI */}
                {(() => {
                  switch (modalImage) {
                    case 상율:
                      return 'ISFP';
                    case 재훈:
                      return 'INFP';
                    case 상준:
                      return 'ESTJ';
                    case 현구:
                      return 'ENTP';
                    default:
                      return 'ENFP';
                  }
                })()}
              </NameTag>
            </UserName>
              <ModalTitle>
                자기소개 & TMI
                  <Text1>
                    {/* 자기소개 & TMI */}
                  {(() => {
                  switch (modalImage) {
                    case 상율:
                      return '안녕하세요? 7년다닌 회사를 그만두고 웹개발자가 되고싶어 이번 내배캠에 지원하게 된 박상율입니다. ISFP 특징이 귀찮음인데 극복하고 열심히 해보겠습니다. 잘부탁드립니다!!';
                    case 재훈:
                      return '안녕하세요 부산에서 살다가  수원에 올라와있는 윤재훈입니다. 회계를 공부하다가 경영기획으로 취업을 하였고 개발이라는 작업이 더 좋아 퇴사 후 공부를 결심하게 되었습니다. 감사합니다.';
                    case 상준:
                      return '안녕하세요. 대구에 살고 있는 28살 이상준이라고 합니다. 취미 삼아 코딩이 재밌어 보여서 배워보는 중입니다. ';
                    case 현구:
                      return '안녕하세요? 지현구입니다. 컴퓨터 공학과를 졸업하였지만 코딩에 있어서는 많이 부족합니다. 5개월동안 열심히 하여 부족한 점들을 다 채워서 나가겠습니다!';
                    default:
                      return '안녕하세요. 고광주라고 합니다. 비전공자 이지만 열심히 노력하고 공부해서 좋은 개발자가 되고 싶습니다. ENFP라 쉽게 질려하는 경향이 있는데 이겨내고 즐겁고 열심히 공부에 집중하도록 노력하겠습니다! ';
                    }
                  })()}
                  </Text1>
                  <Text2Content>
                    <Text2>
                      {/* 나의 좌우명 */}
                      {(() => {
                        switch (modalImage) {
                          case 상율:
                            return '뭘하든 즐겁게!';
                          case 재훈:
                            return '이왕 할거면 즐겁게! ';
                          case 상준:
                            return '가볍게 즐겁게!';
                          case 현구:
                            return '다같이 즐겁게!';
                          default:
                            return '미친듯이 즐겨라!';
                        }
                      })()}
                    </Text2>
                    <Text3Content>
                      <Text3>
                        {/* 깃허브 주소 링크 걸기 */}
                        {(() => {
                        switch (modalImage) {
                          case 상율:
                            return <a href="https://github.com/hayul93" target="_blank">깃허브 주소: https://github.com/hayul93</a>;
                          case 재훈:
                            return <a href="https://github.com/hoonssss" target="_blank">깃허브 주소: https://github.com/hoonssss</a>;;
                          case 상준:
                            return <a href="https://github.com/Sangjun-L" target="_blank">깃허브 주소: https://github.com/Sangjun-L</a>;;
                          case 현구:
                            return <a href="https://github.com/jeendale" target="_blank">깃허브 주소: https://github.com/jeendale</a>;;
                          default:
                            return <a href="https://github.com/KoKwangJu" target="_blank">깃허브 주소: https://github.com/KoKwangJu</a>;;
                        }
                      })()}
                      </Text3>
                      <Text3>
                        {/* 블로그 주소 링크 걸기 */}
                        {(() => {
                        switch (modalImage) {
                          case 상율:
                            return <a href="https://dev-story93.tistory.com" target="_blank">블로그 주소: https://dev-story93.tistory.com</a>;
                          case 재훈:
                            return <a href="https://hoonssss.tistory.com/" target="_blank">블로그 주소: https://hoonssss.tistory.com/</a>;
                          case 상준:
                            return '블로그 없어요!';
                          case 현구:
                            return <a href="https://velog.io/@jeendale" target="_blank">블로그 주소: https://velog.io/@jeendale</a>;
                          default:
                            return <a href="https://kkrecord.tistory.com" target="_blank">블로그 주소: https://kkrecord.tistory.com </a>;
                        }
                      })()}
                      </Text3>
                    </Text3Content>
                  </Text2Content>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                장점 & 협업스타일
                <Text1>
                  {/* 장점 & 협업스타일 */}
                  {(() => {
                        switch (modalImage) {
                          case 상율:
                            return '장점은 인내심이 강합니다. 협업은 팀원에 도움을 주는것을 좋아합니다. 지금은 아는것이 별로없어 도울수있는게 없다는게 슬퍼요. 서로 소통 많이하면서 하고싶어요!';
                          case 재훈:
                            return '다양한 경험이 저의 장점이라고 생각합니다. 협업스타일은 동료들의 진행상황을 파악한 뒤 동료를 이끌거나 따라가는 스타일입니다.';
                          case 상준:
                            return '저의 장점은 의사표현이 확실하하고 매사에 적극적인 것입니다. ';
                          case 현구:
                            return '장점은 선합니다.협업은 알고 있는 것에서는 최대한도와드리고 열심히 하겠습니다. 하지만 아직 부족한 점이 많아 적극적이지는 않습니다.적극적인 자세가 되어가겠습니다.';
                          default:
                            return '저는 잘 배려 해주고 의견을 최대한 수용하고 맡은 일은 책임감 있게 해내는거라 생각합니다.';
                        }
                      })()}
                </Text1>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                경험
                <Text1>
                  {/* 경험 */}
                  {(() => {
                        switch (modalImage) {
                          case 상율:
                            return '스파르타 코딩클럽의 항해99 프리코스 1기 스프링과정을  약 1달정도 했었어요. 이번 미니프로젝트에서 Modal 구현을 맡았었는데 어려우면서도 재밌었습니다!';
                          case 재훈:
                            return '코딩에 대한 경험은 학부시절 조과제로 Python을 통한 게임개발, 공공데이터 청년인턴 시 팀과 협업하여 밀양시 대시보드를 만들어 보았습니다. 저는 코딩을 할줄몰라서 정리만 했습니다.';
                          case 상준:
                            return '저는 항공조종학과를 졸업 후 미국에서 조종사 자격증을 취득한 경헙이 있습니다. 코딩에 대한 경험으로는 리액트를 4개월간 배웠습니다. ';
                          case 현구:
                            return '컴퓨터 공학과를 졸업했지만 코딩에 대한 경험은 부족합니다. 학교에서 배운 코딩보다 더 많은 것을 경험하겠습니다.';
                          default:
                            return '저는 비전공자로 이번에 코딩을 처음해봐서 아직 경험이라는 것은 없는거 같습니다.';
                        }
                      })()}
                </Text1>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                목표
                <Text1>
                  {/* 목표 */}
                  {(() => {
                        switch (modalImage) {
                          case 상율:
                            return '백엔드 개발자로 취업하는게 최종 목표이지만 내일배움캠프의 교육과정을 잘 따라가서 어디가도 한사람의 몫을 해내고싶습니다!!';
                          case 재훈:
                            return '제 생각을 실현시킬 수 있는 개발자가 되는 것이 저의 목표입니다. 취업이 첫번쨰 목표이고 두번쨰 목표는 창업입니다.';
                          case 상준:
                            return '제 목표는 무탈하고 편안하게 사는 겁니다. ';
                          case 현구:
                            return '배울 수 있는 것은 최대한 많이 배우고 싶습니다. 개발자 될 수 있는 조건을 확실하게 만들고 이번 캠프가 끝나면 취직을 하고 싶습니다.';
                          default:
                            return '최종 목표는 취직을 하는 것 이지만 이번 캠프에서 JAVA완Spring 을 공부하고 느리지만 조금씩 발전하고 싶습니다.';
                        }
                      })()}
                </Text1>
              </ModalTitle>
              <Line img src={라인} alt="라인" />
              <ModalTitle>
                취미 & 특기
                <Text1>
                  {/* 취미 & 특기 */}
                  {(() => {
                        switch (modalImage) {
                          case 상율:
                            return '취미는 주로 FPS게임을 많이하구요! 영화나 드라마 보는 것도 좋아한답니다!';
                          case 재훈:
                            return '헬스를 통해 스트레스를 풀었지만 회사와 병행하기 힘들어 그만두었었고, 롤을 주로 하고있습니다.';
                          case 상준:
                            return '취미랑 특기는 음악 듣고 산책하고 게임하는걸 좋아합니다. ';
                          case 현구:
                            return '취미와 특기는 헬스입니다. 건강한 삶을 위해 시작했고 지금도 그렇습니다. 안전하고 꾸준하게 운동하는 것을 좋아합니다';
                          default:
                            return '영화,음악 감상 을 취미로 하고 있습니다.특기는 잘 모르겠지만 노래부르면서 스트레스를 푸는 편입니다 ';
                        }
                      })()}
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
  /* background-color: #fff; */
  background-color: #46b126;
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
    width: 2px;
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
  text-align: center;
  display: block;
  position: static;
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
  background-color: green;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  height: 40px;
  width: 80px;
  border: none;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;
