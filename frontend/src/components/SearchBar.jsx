import React, {useState, useContext} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';
import axios from 'axios';
import YTSearch from 'youtube-api-search';
const YOUTUBE_API_KEY = require('../../../backend/server/config.js');



const SearchBar = () => {
  const {searchText, setSearchText} = useContext(GlobalContext);
  const { currentSongInfo, setCurrentSongInfo } = useContext(GlobalContext);
  const {videoId, setVideoId} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Please enter a song to search for!");
    } else {
      setCurrentSongInfo(searchText);
      searchVideos(searchText);
    }
  };

  const searchVideos = (term) => {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      console.log(videos[0].id.videoId);
      setVideoId(videos[0].id.videoId);
    })
  }



  const onChange = (e) => setSearchText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="submit-form">
        <input
          type="text"
          name="search-text"
          placeholder="Search for a song..."
          value={searchText}
          onChange={onChange}
          className="search-input"
        />
        <button type="submit" className="submit-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
