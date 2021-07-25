import React from 'react';
import VideoList from './VideoList';
const bodyStyle = {
  position: 'absolute',
  color: 'black',
  background: 'white',
  width: '100%',
  display: 'flex', //내부정렬->block element 정렬
  flexDirection: 'column', //가로정렬
};
function VideoBody() {
  return (
    <div style={bodyStyle}>
      <VideoList />
      <VideoList />
      <VideoList />
    </div>
  );
}

export default VideoBody;
