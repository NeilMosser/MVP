import React, {useContext} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';
import Flags from 'country-flag-icons/react/3x2';
import db from '../../../data.js';


const LanguageBox = () => {

  const {lyrics, setLyrics} = useContext(GlobalContext);

  const handleClick = () => {
    console.log(db);
  }

  return(
    <div>
    <div className="language-box">Select a language: </div>
    <div className="flag-box">
      <Flags.CN className="flag chinese" onClick={handleClick} />
      <Flags.ES className="flag spanish" onClick={handleClick} />
      <Flags.BR className="flag portuguese" onClick={handleClick} />
      <Flags.RU className="flag russian" onClick={handleClick}/>
      <Flags.JP className="flag japanese" onClick={handleClick}/>
      <Flags.KR className="flag korean" onClick={handleClick}/>
    </div>
    </div>

  );
};

export default LanguageBox;