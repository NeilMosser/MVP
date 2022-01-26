import React, { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';



const VideoDescription = () => {

   const {currentSongInfo, setCurrentSongInfo} = useContext(GlobalContext);
   const {descriptionInfo, setDescriptionInfo} = useContext(GlobalContext);

  return(

      <div className='video-description' >
        {descriptionInfo !== undefined ? `Title: ${descriptionInfo.title}` : 'Loading...'}
        {descriptionInfo !== undefined ? `Description: ${descriptionInfo.description}` : 'Loading...'}
      </div>

  );
};

export default VideoDescription;