import React from 'react';
import SearchBar from './SearchBar';
import VideoBody from './VideoBody';
import MenuBar from './MenuBar';
let menuState = true;
function App() {
  return (
    <>
      <div className='searchbar'>
        <SearchBar menuState={menuState} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {menuState === true && (
          <div className='menubar'>
            <MenuBar />
          </div>
        )}
        <div className='videobody'>
          <VideoBody />
        </div>
      </div>
    </>
  );
}

export default App;
