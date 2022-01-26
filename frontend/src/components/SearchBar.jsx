import React, {useState, useContext} from 'react';
import GlobalContext from '../contexts/GlobalContext.jsx';
import axios from 'axios';



const SearchBar = () => {
  const {searchText, setSearchText} = useContext(GlobalContext);
  const { currentSongInfo, setCurrentSongInfo } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Please enter a song to search for!");
    } else {
      alert(searchText);
      setCurrentSongInfo(searchText);
    }
  };

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
