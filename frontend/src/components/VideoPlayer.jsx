import React, {useContext} from 'react';
import YouTube from '@u-wave/react-youtube';
import GlobalContext from '../contexts/GlobalContext.jsx';

const VideoPlayer = () => {


  const {videoId, setVideoId} = useContext(GlobalContext);

  return(
    <YouTube className="youtube-player"
  video={videoId}
  width="700px"
  height="400px"
/>
  );
};

export default VideoPlayer;