import React from 'react'
import { styled } from "styled-components";

const TeamIntroduce = () => {
  return (
    <>
      <Team>
        <TeamIntroduce1>
          안녕하세요!
          <TeamIntroduce1>
            저희는 B07조의 🧴알B07🧴입니다!
          </TeamIntroduce1>
        </TeamIntroduce1>
      </Team>


      <TeamContainer>
        <Team1>
          <Team2>
            🧴팀 특징🧴
            <Team4>
              🔫
              🎮
              🚶‍
              💪
              🎧
              🎬
              📺
              🎵
              🎤
            </Team4>
          </Team2>
        </Team1>

        <Team1>
          <Team2>
              🧴추구하는 목표🧴
              <Team3>
                🍶 GIT 사용법 숙지하기
              </Team3>
              <Team3>
                🍶 포기하지 않고 끝까지 수료하기
              </Team3>
              <Team3>
                🍶 잘 못해도 일단 해보기
              </Team3>
          </Team2>
        </Team1>

        <Team1>
          <Team2>
              🧴팀의 규칙🧴
              <Team3>
                🍶 늦어도 11시까지 출근하기
              </Team3>
              <Team3>
                🍶 점심시간 12:00~13:30
              </Team3>
              <Team3>
                🍶 저녁시간 18:00~19:30
              </Team3>
              <Team3>
                🍶 개인 사정 있을 시 팀원들에게 미리 말해주기!
              </Team3>
              <Team3>
                🍶 슬랙 단체 채팅방 확인하기!
              </Team3>
          </Team2>
        </Team1>

      </TeamContainer>
    <Member>
      Member
    </Member>
    </>
  )
}

export default TeamIntroduce

const Team = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  height: 160px;
  width: 1100px;
  background-color: #D9D9D9;
  border-radius: 15px;
  display: flex;
  text-align: center;
  font-size: 20px;
  justify-content: center;

`;

const TeamIntroduce1 = styled.div`
  height: 50px;
  width: 1200px;
  border: none;
  padding: 20px;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  display: block;
  position: static;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 90px;
  gap: 60px;
`;

const Team1 = styled.div`
  height: 420px;
  width: 320px;
  background-color: #D9D9D9;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;

const Team2 = styled.div`
  height: 380px;
  width: 280px;
  display: flex;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  flex-direction: column;
`;
const Team3 = styled.div`
  margin-top: 20px;
  height: 60px;
  width: 280px;
  border: none;
  font-size: 24px;
  font-weight: normal;
  text-align: left;
  display: block;
`;
const Team4 = styled.div`
  margin-top: 20px;
  height: 60px;
  width: 280px;
  border: none;
  font-size: 50px;
  font-weight: normal;
  text-align: center;
  display: block;
`;

const Member = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  height: 50px;
  width: 1000px;
  border: none;
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


