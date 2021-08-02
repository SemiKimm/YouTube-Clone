import React from 'react';
import VideoList from './VideoList';
const bodyStyle = {
  position: 'absolute',
  color: 'black',
  background: 'white',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
};
function VideoBody({ videoState, setVideoState, home, setHome }) {
  return (
    <div style={bodyStyle}>
      <VideoList
        videoState={videoState}
        setVideoState={setVideoState}
        home={home}
        setHome={setHome}
      />
      <VideoList />
      <VideoList />
    </div>
  );
}

export default VideoBody;
