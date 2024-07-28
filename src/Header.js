import React, { useState } from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';

const Header = ({ onToggle, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <header className="header">
      <h1>
        <span id='word1'>Image</span>
        <span id='word2'>Hub</span>

        </h1>
      <div className="search-container">
        <input
        id='searchInput'
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>
          <FaSearch />
        </button>
      </div>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} />
        <span className="slider round"></span>
      </label>
    </header>
  );
};

export default Header;
