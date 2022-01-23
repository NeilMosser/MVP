import React from 'react';
import axios from 'axios';


const { useState } = React;


const SearchBar = () => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter a song to search for!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="submit-form">
        <input
          type="text"
          name="search-text"
          placeholder="Search for a song..."
          value={text}
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
