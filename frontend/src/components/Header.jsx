import React from 'react';
import SearchBar from './SearchBar.jsx';
import Icon from './Icon.jsx';

const Header = () => {

  return(
    <div className='header-div'>
      <Icon />
      <h1 className='header-text'>Lyric Helper</h1>
      <SearchBar className='search-bar' />
    </div>
  );
};

export default Header;