import React, { useState, useRef } from 'react';
import CreateList from './CreateList';
function CreateComment() {
  const [commentCount, setCommentCount] = useState(0);
  const [inputs, setInputs] = useState({
    commentData: '',
  });

  const { commentData } = inputs;
  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [commentLists, setCommentLists] = useState([
    {
      id: 0,
      commentData: '',
    },
  ]);
  const nextId = useRef(1);
  const putComment = () => {
    const commentList = {
      id: nextId.current,
      commentData,
    };
    setCommentLists([...commentLists, commentList]);
    setInputs({ commentData: '' });
    nextId.current += 1;
    setCommentCount(commentCount + 1);
  };

  return (
    <>
      <div>댓글 {commentCount}개</div>
      <div>
        <input
          name='commentData'
          placeholder='공개 댓글 추가'
          onChange={inputChange}
          value={commentData}
        />
        <button onClick={putComment}>등록</button>
      </div>
      <CreateList commentLists={commentLists} />
    </>
  );
}

export default CreateComment;
