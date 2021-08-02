import React, { useState } from 'react';
import CreateComment from './CreateComment';

function WatchingVideo() {
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const goodBtnClick = () => {
    setGoodCount(goodCount + 1);
  };
  const badBtnClick = () => {
    setBadCount(badCount + 1);
  };
  return (
    <>
      <div>
        <video alt={'영상'}></video>
      </div>
      <div>제목</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>조회수</div>
        <div onClick={goodBtnClick}>👍 {goodCount}</div>
        <div onClick={badBtnClick}>👎 {badCount}</div>
      </div>

      <div>
        <CreateComment />
      </div>
    </>
  );
}

export default WatchingVideo;
