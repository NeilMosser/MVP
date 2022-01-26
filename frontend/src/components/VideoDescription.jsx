import React, { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';



const VideoDescription = () => {

   const {currentSongInfo, setCurrentSongInfo} = useContext(GlobalContext);

  return(

      <div className='video-description' >{currentSongInfo.items[0].snippet.title}</div>

  );
};

export default VideoDescription;