import React from 'react';

function VideoList({ videoState, setVideoState, home, setHome }) {
  const videoClick = () => {
    setVideoState(!videoState);
    setHome(!home);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ border: '0.5px solid gainsboro', height: '35%' }}>
        <video onClick={videoClick}></video>
        <div>영상제목1</div>
        <div>채널명</div>
      </div>
      <div style={{ border: '0.5px solid gainsboro', height: '35%' }}>
        <video></video>
        <div>영상제목2</div>
        <div>채널명</div>
      </div>
      <div style={{ border: '0.5px solid gainsboro', height: '35%' }}>
        <video></video>
        <div>영상제목3</div>
        <div>채널명</div>
      </div>
      <div style={{ border: '0.5px solid gainsboro', height: '35%' }}>
        <video></video>
        <div>영상제목4</div>
        <div>채널명</div>
      </div>
    </div>
  );
}

export default VideoList;
