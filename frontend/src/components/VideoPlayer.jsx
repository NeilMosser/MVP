import React from 'react';
import YouTube from '@u-wave/react-youtube';

const VideoPlayer = () => {

  const videoID = "G97_rOdHcnY";
  return(
    <YouTube className="youtube-player"
  video={videoID}
  width="50%"
  height="400px"
/>
  );
};

export default VideoPlayer;