import React, { useState, useEffect } from 'react';
import { styled } from "styled-components";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB9Ur_8F4TtHjLG4r6hZCfy937nsHFOM1o",
  authDomain: "nbcmini-2b307.firebaseapp.com",
  projectId: "nbcmini-2b307",
  storageBucket: "nbcmini-2b307.appspot.com",
  messagingSenderId: "737447692647",
  appId: "1:737447692647:web:eb497773e92a3fb858c7c2",
  measurementId: "G-MK103GHNFK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const nbcminiCollectionRef = collection(db, "nbcmini");

const Comment = () => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchAndDisplayComments();
  }, []);
//---------------------------------------------------------------------------------댓글 목록 가져오기
const fetchAndDisplayComments = async () => {
  const querySnapshot = await getDocs(
    query(nbcminiCollectionRef, orderBy("timestamp", "desc"))
  );
  const commentList = [];

  querySnapshot.forEach((doc) => {
    commentList.push(doc.data().commentText);
  });

  setComments(commentList);
};
//---------------------------------------------------------------------------------댓글 추가
const handleSaveClick = async () => {
  if (commentText.trim() === "") {
    alert("댓글 내용을 입력해주세요.");
    return;
  }

  const newComment = {
    commentText,
    timestamp: new Date() // 현재 시간을 timestamp 필드에 추가
  };
  await addDoc(nbcminiCollectionRef, newComment); // 컬렉션 참조 전달

  // Firebase에서 댓글 추가 후, 댓글 목록 다시 가져와서 상태를 업데이트
  await fetchAndDisplayComments();
  
  // 댓글 추가 후, 입력 필드 초기화
  setCommentText('');
  alert("댓글이 등록되었습니다.");
};
//---------------------------------------------------------------------------------댓글 삭제
const handleDeleteClick = async (commentToDelete) => {
  const confirmation = window.confirm("삭제하시겠습니까?");
  
  if (confirmation) {
    // Firebase에서 삭제
    const querySnapshot = await getDocs(nbcminiCollectionRef); // 컬렉션 참조 전달
    querySnapshot.forEach(async (doc) => {
      if (doc.data().commentText === commentToDelete) {
        await deleteDoc(doc.ref);
      }
    });

    // Firebase에서 댓글 삭제 후, 댓글 목록 다시 가져와서 상태를 업데이트
    await fetchAndDisplayComments();

    alert('삭제 되었습니다.');
  }
};

const handleOnKeyPress = e => {
  if (e.key === 'Enter') {
    handleSaveClick(); // Enter 입력이 되면 클릭 이벤트 실행
  }
};

  return (
    <CommentLayout>
      Comment
      <CommentInputBox>
      <CommentInput 
      maxLength={70}
      type="text"
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      placeholder="댓글 내용을 입력란"
      onKeyPress={handleOnKeyPress}
      />
      <CommentInputButton onClick={handleSaveClick}>입력</CommentInputButton>
      </CommentInputBox>
      <CommentListLayout>
        {comments.map((comment, index) => (
          <CommentBox key={index}>
            <CommentText>{comment}</CommentText>
            <CommentDelete onClick={() => handleDeleteClick(comment)}>삭제</CommentDelete>
          </CommentBox>
        ))}
      </CommentListLayout>
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

const CommentListLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 500px;
  gap: 10px;
`;

const CommentBox = styled.div`
  gap: 20px;
  display: flex;
`

const CommentText = styled.div`
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