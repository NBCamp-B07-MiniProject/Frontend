import './App.css';
import { styled } from "styled-components";
import Card from "./components/Card";
import Comment from "./components/Comment";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Header>
        육합지졸
      </Header>
      <TeamIntroduction>
        팀 소개
      </TeamIntroduction>
      <Card />
      <Comment />
    </div>
  );
}

export default App;

const Header = styled.div`
display: flex;;
background-color: yellow;
justify-content: center;
align-items: center;
height: 300px;
width: 100%;
font-size: 100px;
margin-bottom: 50px;
`;

const TeamIntroduction = styled.div`
display: flex;
background-color: orange;
justify-content: center;
align-items: center;
height: 200px;
width: 1200px;
font-size: 20px;
margin-left: auto;
margin-right: auto;
border-radius: 10px;
margin-bottom: 50px;
`;