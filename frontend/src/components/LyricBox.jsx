import React, {useContext} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';



const LyricBox = () => {

  const {lyrics, setLyrics} = useContext(GlobalContext);

  return(
    <div className="lyric-box">{lyrics.lyrics}</div>

  );
};

export default LyricBox;