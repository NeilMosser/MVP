import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import VideoPlayer from './VideoPlayer.jsx';
import VideoDescription from './VideoDescription.jsx';
import LyricBox from './LyricBox.jsx';
import LanguageBox from './LanguageBox.jsx';
import GlobalContext from '../contexts/GlobalContext.jsx';
const YOUTUBE_API_KEY = require('../../../backend/server/config.js');


const App = () => {

  const [currentSongInfo, setCurrentSongInfo] = useState({});
  const [lyrics, setLyrics] = useState({});
  const [videoId, setVideoId] = useState('G97_rOdHcnY');


  axios.get('lyrics/la tortura')
    .then((response) => {
      console.log(response);
      setLyrics(response.data);
    })

    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`)
    .then((response) => {
      console.log(response);
    })


  return (
    <GlobalContext.Provider value={{
      currentSongInfo, setCurrentSongInfo,
      lyrics, setLyrics,
      videoId, setVideoId
      }}>
    <div className='header-container'>
         <Header />
         </div>
         <div className='player-lyric'>
         <div className='app-container'>
           <div className='player-description'>
         <VideoPlayer />
         <VideoDescription />
         </div>
         <LyricBox />
         </div>
         <LanguageBox />
    </div>
    </GlobalContext.Provider>
  )
}

export default App;
