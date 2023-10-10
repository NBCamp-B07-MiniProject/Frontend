import React from 'react'
import { styled } from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
        🧴알B07🧴
    </HeaderContainer>  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  width: 1200px;
  height: 118px;
  margin: 100px auto 100px auto;
  font-size: 96px;
`;
