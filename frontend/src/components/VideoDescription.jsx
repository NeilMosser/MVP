import React, { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';



const VideoDescription = () => {

   const {currentSongInfo, setCurrentSongInfo} = useContext(GlobalContext);

  return(

      <div className='video-description' >{
        currentSongInfo.items !== undefined ? currentSongInfo.items[0].snippet.title : 'Loading'}</div>

  );
};

export default VideoDescription;