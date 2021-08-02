import React from 'react';
import LogoImg from './logo.jpg';
import MenuImg from './menuImg.jpg';

const barStyle = {
  color: 'black',
  background: 'white',
  padding: '10px',
  fontSize: '20px',
  border: '1px solid gainsboro',
  lineHeight: 1.5,
  display: 'flex',
  flexDirection: 'row',
};

function SearchBar({
  menubar,
  setMenubar,
  videoState,
  setVideoState,
  home,
  setHome,
}) {
  function onClickMenuBtn() {
    setMenubar(!menubar);
    //console.log(menubar);
  }
  const logoClick = () => {
    setVideoState((videoState = false));
    setHome((home = true));
  };
  return (
    <>
      <div style={barStyle}>
        <div onClick={onClickMenuBtn}>
          <img src={MenuImg} width='45' height='45' alt='menuIcon' />
        </div>
        <div onClick={logoClick}>
          <img src={LogoImg} width='150' height='45' alt='logoImg' />
        </div>
        <div>
          <input
            type='text'
            placeholder='검색'
            style={{ width: '300px', height: '45px' }}
          ></input>
        </div>
        <div>
          <button style={{ width: '45px', height: '45px' }}>🔍</button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
