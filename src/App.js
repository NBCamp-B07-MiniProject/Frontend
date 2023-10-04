import './App.css';
import { styled } from "styled-components";
import Card from "./components/Card";
import Comment from "./components/Comment";
import Header from "./components/Header";
import TeamIntroduce from "./components/TeamIntroduce";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Header />
      <TeamIntroduce />
      <Card />
      <Comment />
    </div>
  );
}

export default App;