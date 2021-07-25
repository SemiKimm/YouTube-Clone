import React from 'react';
const barStyle = {
  color: 'black',
  background: 'white',
  fontSize: '20px',
  lineHeight: 3,
  width: '200px',
  border: '0.5px solid gainsboro',
};
function MenuBar() {
  return (
    <div style={barStyle}>
      <div>
        <div>홈</div>
        <div>탐색</div>
        <div>구독</div>
      </div>
      <div>
        <div>구독 목록</div>
      </div>
      <div>
        <div>설정</div>
        <div>고객센터</div>
      </div>
    </div>
  );
}
export default MenuBar;
