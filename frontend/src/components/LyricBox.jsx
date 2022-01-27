import React, {useContext} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';



const LyricBox = () => {

  const {lyrics, setLyrics} = useContext(GlobalContext);

  return(
    <div className="lyric-box">{lyrics.lyrics.substring(0, 2500)}</div>

  );
};

export default LyricBox;