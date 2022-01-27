import React, { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';



const VideoDescription = () => {

   const {currentSongInfo, setCurrentSongInfo} = useContext(GlobalContext);
   const {descriptionInfo, setDescriptionInfo} = useContext(GlobalContext);

  return(

      <div className='video-description' >
        {descriptionInfo !== undefined ? `Title: ${descriptionInfo.title}` : 'Loading...'}
        <div>
        {descriptionInfo.description !== undefined ? `Description: ${descriptionInfo.description.substring(0,250) + '...'}` : 'Loading...'}
        </div>
      </div>

  );
};

export default VideoDescription;