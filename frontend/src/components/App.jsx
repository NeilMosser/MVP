import React, { useState } from 'react';
import Header from './Header.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoDescription from './VideoDescription.jsx';
import LyricBox from './LyricBox.jsx';
import GlobalContext from '../contexts/GlobalContext.jsx';



const App = () => {

  const [currentSongInfo, setCurrentSongInfo] = useState({});

  return (
    <div className='app-container'>
      <GlobalContext.Provider value={{
        currentSongInfo, setCurrentSongInfo
        }}>
         <Header />
         <VideoPlayer />
         <VideoDescription />
         <LyricBox />
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
