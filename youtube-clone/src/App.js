import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoBody from './VideoBody';
import MenuBar from './MenuBar';
import WatchingVideo from './WatchingVideo';
function App() {
  const [menubar, setMenubar] = useState(true);
  const [videoState, setVideoState] = useState(false);
  const [home, setHome] = useState(true);
  return (
    <>
      <div className='searchbar'>
        <SearchBar
          menubar={menubar}
          setMenubar={setMenubar}
          videoState={videoState}
          setVideoState={setVideoState}
          home={home}
          setHome={setHome}
        />
      </div>

      {videoState === false || home === true ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            {menubar === true && (
              <div className='menubar'>
                <MenuBar />
              </div>
            )}
          </div>

          <div className='videobody'>
            <VideoBody
              videoState={videoState}
              setVideoState={setVideoState}
              home={home}
              setHome={setHome}
            />
          </div>
        </div>
      ) : (
        <div>
          <WatchingVideo />
        </div>
      )}
    </>
  );
}

export default App;
