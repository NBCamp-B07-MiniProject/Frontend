import React from 'react'
import { styled } from "styled-components";


const Card = () => {
  return (
    <CardContainer>
    <Card1><img className="phoneImage" alt="iPhone_01" src="img/고광주.png" /></Card1>
    <Card1>Card2</Card1>
    <Card1>Card3</Card1>
    <Card1>Card4</Card1>
    <Card1>Card5</Card1>
    </CardContainer>
  )
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
    transform: translateY(-10px);
  }
`;