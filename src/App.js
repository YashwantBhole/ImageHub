import React, {useEffect, useState } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';

const App = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    let page =1;

  const handleToggle = () => {

    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  async function handleSearch(query) {
  
    const searchResult = document.getElementById('searchResult');
    const loadMore = document.getElementById('loadMore')
   let Query = query
    const url = `https://api.unsplash.com/search/photos?page=${page}&per_page=15&query='${Query}'&client_id=YCHT93HDzMmzvuCknIRMbrQJRi_t0v8WVx-43FN-Q0I`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const results = data.results;

    if (page === 1) {
      searchResult.innerHTML = ""
    }
    results.map((result) => {
      const image = document.createElement('img');
      image.src = result.links.download;

      const link = document.createElement('a');
      link.href = result.urls.small;
      link.target = "_blank"

      searchResult.appendChild(link);
      link.appendChild(image);
      const para = document.createElement('p');
      para.innerText = result.alt_description.toUpperCase();
      link.appendChild(para);

    })
    loadMore.style.display = 'block'
    loadMore.addEventListener('click', () => {
      page = page+1;
    handleSearch(query)

    })
  
  };

  useEffect(()=>{
    handleSearch(query=> 'programming');
  },[])


  return (
  <>
   
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Header onToggle={handleToggle} onSearch={handleSearch} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} handleSearch={handleSearch} />
      <main className={sidebarOpen ? 'main-content open' : 'main-content'}>
        <div id='searchResult'></div>
        <button id='loadMore'>Load More⏬</button>
      </main>
    </div>
    </>
  );
};

export default App;
