import React, { useState, useEffect } from 'react';
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
  const [lyrics, setLyrics] = useState({"lyrics": "Loading..."});
  const [videoId, setVideoId] = useState('Dsp_8Lm1eSk');
  const [searchText, setSearchText] = useState('la tortura');
  const [descriptionInfo, setDescriptionInfo] = useState({});

useEffect(() => {
axios.get(`lyrics/${searchText}`)
    .then((response) => {
      //console.log(response);
      setLyrics(response.data);
    })

}, [currentSongInfo, videoId])

useEffect(() => {
  axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`)
  .then((response) => {
    setDescriptionInfo(response.data.items[0].snippet)
  })

}, [videoId])


// useEffect(() => {
//   console.log("this is what we send ", lyrics.lyrics)
//   axios.post(`/translate/`, lyrics.lyrics)
//     .then((response) => {
//       console.log("Here --------->" + lyrics.lyrics);
//     })
// }, [lyrics])

  return (
    <GlobalContext.Provider value={{
      currentSongInfo, setCurrentSongInfo,
      lyrics, setLyrics,
      videoId, setVideoId,
      searchText, setSearchText,
      descriptionInfo, setDescriptionInfo
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
