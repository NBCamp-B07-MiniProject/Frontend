import React from 'react'
import { styled } from "styled-components";

const Comment = () => {
  return (
    <CommentLayout>
      Comment
      <CommentInputBox>
      <CommentInput></CommentInput>
      <CommentInputButton>입력</CommentInputButton>
      </CommentInputBox>
    </CommentLayout>
  )
}

export default Comment

const CommentLayout = styled.div`
  display: flex;
  width: 1200px;
  height: 500px;
  background-color: #D9D9D9;
  margin: 100px auto 100px auto;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const CommentInputBox = styled.div`
  width: 11600px;
  height: 30px;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const CommentInput = styled.input`
  width: 1000px;
  height: 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding-left: 15px;
`;

const CommentInputButton = styled.div`
  width: 90px;
  height: 30px;
  cursor: pointer;
  background-color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
`;