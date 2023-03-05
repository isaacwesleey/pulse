import React from 'react';
import moment from 'moment';
import './News.css';

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

const News = ({ post }) => {
  return (
    <>
      {post && (
        <li className='news'>
          <div className='news-avatar'>
            <img
              src='https://entrelectoresyescritores.com/ELE/avatares/a3.png'
              alt={post.author_name}
            />
          </div>
          <div className='news-container'>
            <div className='news-header'>
              <span className='news-author'>Por {post.author_name}</span>
              <span className='news-theme'>{post.theme}</span>
              <time className='news-time'>
                {moment(post.created_at).fromNow()}
              </time>
            </div>
            <div className='news-body'>
              <h3 className='news-title'>{post.title}</h3>
              <p className='news-content'>{post.lede}</p>
              {post.image && (
                <img
                  className='news-image'
                  src={`http://localhost:3005/${post.image}`}
                  alt={post.title}
                />
              )}
            </div>
            <div className='news-footer'>
              <button className='news-comment-btn'>Comentar</button>
              <button className='news-share-btn'>Compartir</button>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default News;
