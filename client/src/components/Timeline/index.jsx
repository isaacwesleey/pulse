import React, { useState, useEffect } from 'react';
import './Timeline.css';
import moment from 'moment';
import { getNews } from '../../api.js';

import News from '../News';

moment.updateLocale('es', {
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    ss: '%d segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
  },
});

function Timeline() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await getNews(keyword);
    setPosts(data.data.news);
  };

  useEffect(() => {
    async function fetchPosts() {
      const data = await getNews();
      setPosts(data.data.news);
    }

    fetchPosts();
  }, []);

  return (
    <main className='container'>
      <ul className='timeline'>
        <div className='timeline_search'>
          <form className='search-form' onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Buscar en Pulse'
              className='search-input'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type='submit' className='search-button'>
              Buscar
            </button>
          </form>
        </div>
        {posts &&
          posts.map((post) => {
            return <News key={post.id} post={post} />;
          })}
      </ul>
    </main>
  );
}

export default Timeline;
