import React, {useContext, useEffect} from 'react';
import YouTube from '@u-wave/react-youtube';
import GlobalContext from '../contexts/GlobalContext.jsx';

const VideoPlayer = () => {


  const {videoId, setVideoId} = useContext(GlobalContext);

  useEffect(() => {
    console.log(videoId);
  }, [videoId])

  return(
    <YouTube className="youtube-player"
  video={videoId}
  width="700px"
  height="400px"
  showRelatedVideos={false}
  modestBranding={true}
/>
  );
};

export default VideoPlayer;