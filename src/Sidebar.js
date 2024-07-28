import React from 'react';
import './Sidebar.css';
import { FaBars } from 'react-icons/fa';


const Sidebar = ({ isOpen, toggleSidebar ,handleSearch}) => {

  function handleArchitect(query){
    handleSearch('Architecture')
  }

  function handleSports(query){
    handleSearch('sports')
  }

function handleNature(query){
  handleSearch('Nature')
}

  function handleAnimals(query){
    handleSearch('Animals')
  }

  function handleScience(query){
    handleSearch('Science')
  }

  function handleMusic(query){
    handleSearch('Music')
  }

  function handleHistorical(query){
    handleSearch('Historical')
  }

  function handleGames(query){
    handleSearch('Games')
  }
  function handleFashion(query){
    handleSearch('fashion')
  }
 
  function handleBusiness(query){
    handleSearch('Business & work')
  }

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <div className="menu-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <ul>
         <li onClick={handleArchitect}>Architect</li>
        <li onClick={handleSports}>Sports</li>
        <li onClick={handleNature}>Nature</li>
        <li onClick={handleAnimals}>Animals</li>
        <li onClick={handleScience}>Science</li>
        <li onClick={handleMusic}>Music</li>
        <li onClick={handleHistorical}>History</li>
        <li onClick={handleGames}>Games</li>
        <li onClick={handleFashion}>Fashion</li>
        <li onClick={handleBusiness}>Business & Work</li>
      </ul>
    </div>
  );
};

export default Sidebar;
