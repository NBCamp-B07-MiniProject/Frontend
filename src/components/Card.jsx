import React from 'react'
import { styled } from "styled-components";

const Card = () => {
  return (
    <Card1>Card</Card1>
  )
}

export default Card

const Card1 = styled.div`
    height: 339px;
    width: 282px;
    background-color: green;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 3px 0px 15px #c1c1c1;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;