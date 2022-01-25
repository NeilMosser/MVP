import React, { useState } from 'react';
import Header from './Header.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoDescription from './VideoDescription.jsx';
import LyricBox from './LyricBox.jsx';
import GlobalContext from '../contexts/GlobalContext.jsx';



const App = () => {

  const [currentSongInfo, setCurrentSongInfo] = useState({});

  return (
    <GlobalContext.Provider value={{
      currentSongInfo, setCurrentSongInfo
      }}>
    <div className='header-container'>
         <Header />
         </div>
         <div className='app-container'>
         <VideoPlayer />
         <VideoDescription />
         <LyricBox />
    </div>
    </GlobalContext.Provider>
  )
}

export default App;
