import React from 'react'
import { styled } from "styled-components";
import { firestore } from "../firebase-config";

const Comment = () => {

  console.log(firestore);

  return (
    <CommentLayout>
      Comment
      <CommentInputBox>
      <CommentInput maxLength={70}></CommentInput>
      <CommentInputButton>입력</CommentInputButton>
      </CommentInputBox>
      <CommentList>
        <Comments>안녕하세요 안녕하세요 잘봤습니다. 안녕하세요 잘봤습니다. 안녕하세요 잘봤습니다. 안녕하세요 잘봤습니다. 안녕하세요 잘봤습니다.(70자)</Comments> 
        <CommentDelete>삭제</CommentDelete>
      </CommentList>
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
  border-radius: 10px;
`;

const CommentInputBox = styled.div`
  width: 1160px;
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

const CommentList = styled.div`
  height: 30px;
  width: 1160px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 5px;
  gap: 20px;
`;

const Comments = styled.div`
  height: 30px;
  width: 1008px;
  background-color: #f2f0f0;
  border-radius: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const CommentDelete = styled.div`
  width: 90px;
  height: 30px;
  cursor: pointer;
  background-color: #ff6d57;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
`;