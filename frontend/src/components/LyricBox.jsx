import React, {useContext, useState, useEffect} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';
import axios from 'axios';



const LyricBox = () => {

  const {lyrics, setLyrics} = useContext(GlobalContext);
  const [inputText, setInputText] = useState('');
  const [detectLanguageKey, setdetectedLanguageKey] = useState('');
  const [selectedLanguageKey, setLanguageKey] = useState('')
  const [languagesList, setLanguagesList] = useState([])
  const [resultText, setResultText] = useState('');

  const getLanguageSource = () => {
    axios.post(`https://libretranslate.de/detect`, {
            q: lyrics.lyrics.substring(0,500)
        })
            .then((response) => {
                setdetectedLanguageKey(response.data[0].language)
            })
    }

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    const translateText = () => {
        getLanguageSource();

        let data = {
            q : lyrics.lyrics.substring(0,500),
            source: "es",
            target: "en"
        }
        axios.post(`https://libretranslate.de/translate`, data)
        .then((response) => {
            setResultText(response.data.translatedText)
        }).catch((err) => {
          console.log(err);
        })
    }

    useEffect(() => {
      axios.get(`https://libretranslate.de/languages`)
          .then((response) => {
              setLanguagesList(response.data)
          })

          getLanguageSource()
  }, [inputText, lyrics])

  return(

    <div className="lyric-box">
      {resultText ? resultText : lyrics.lyrics.substring(0, 2500)}
      <button className="translate-button" onClick={translateText}>Translate</button>
      {/* <select className="select-language" onChange={languageKey}>
        <option>Please Select Language...</option>
        {languagesList.map((language) => {
            return (
                <option value={language.code}>
                             {language.name}
                </option>
             )
        })}
      </select> */}
    </div>


  );
};

export default LyricBox;