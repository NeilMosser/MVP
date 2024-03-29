import React, {useContext, useEffect} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';
import Flags from 'country-flag-icons/react/3x2';



const LanguageBox = () => {

  let data =
  {
  "chin": ["G97_rOdHcnY", "LwaZVMERWdQ", "waK_iZVSJX0" ],
  "span": ["Dsp_8Lm1eSk", "-zgDXIi1uYw", "P2hM9CLAMu4"],
  "port": ["hcm55lU9knw", "UrT0zCmsN8c", "D112i1ZMEzI"],
  "russ": ["ezBZ3eQf6UQ", "B1yIJ706i78", "sRTB5nfF5Cc"],
  "japa": ["dlFA0Zq1k2A", "K8kjo96CJmg", "PDSkFeMVNFs"],
  "kore": ["U7mPqycQ0tQ", "bw9CALKOvAI", "9bZkp7q19f0"],
  "germ": ["CAVfEwrwT_o", "tC76tIp0kBk", "TMSlTQmDLx4"]
};

let titles =
{
"chin": ["江南 林俊傑", "絲路", "安静 周杰伦" ],
"span": ["la tortura shakira", "caraluna bacilos", "Corre jesse and joy"],
"port": ["Ai se eu te pego telo", "loka", "nao perco meu tempo anitta"],
"russ": ["Внутри разбитой головы", "Возможно", "ЛА ЛА ЛА Клава Кока"],
"japa": ["kana boon Silhouette ", "Karano Kokoro Anly", "zenzenzense"],
"kore": ["Gee generation", "hyuna bubble", "Gangnam style psy"],
"germ": ["Immer Wieder Rooz", "So wie du bist MoTrip", "99 luftballons"]
};

  const {lyrics, setLyrics} = useContext(GlobalContext);
  const {videoId, setVideoId} = useContext(GlobalContext);
  const {searchText, setSearchText} = useContext(GlobalContext);


  useEffect(() => {
    console.log();
   }, [videoId]);

  const handleClick = (e) => {
    let modifier = Math.floor((Math.random() * 3));
    let flag = e.target.nearestViewportElement.className.baseVal.slice(0,4);
    setVideoId(data[`${flag}`][modifier]);
    setSearchText(titles[`${flag}`][modifier]);
  }

  return(
    <div>
    <div className="language-box">Select a language: </div>
    <div className="flag-box">
      <Flags.CN className="chinese flag" onClick={handleClick} />
      <Flags.ES className="spanish flag" onClick={handleClick} />
      <Flags.BR className="portuguese flag" onClick={handleClick} />
      <Flags.RU className="russian flag" onClick={handleClick}/>
      <Flags.JP className="japanese flag" onClick={handleClick}/>
      <Flags.KR className="korean flag" onClick={handleClick}/>
      <Flags.DE className="german flag" onClick={handleClick}/>
    </div>
    </div>

  );
};

export default LanguageBox;