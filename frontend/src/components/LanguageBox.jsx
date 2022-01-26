import React, {useContext} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';



const LanguageBox = () => {

  const {lyrics, setLyrics} = useContext(GlobalContext);

  return(
    <div className="language-box">Select a language: </div>

  );
};

export default LanguageBox;