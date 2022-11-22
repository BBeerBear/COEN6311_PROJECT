import React from 'react';
import LikeButton from './LikeButton';
import SavedButton from './SavedButton';

export default function NewsList({ news }) {
  return (
    <div className='my-3'>
      <div className='col s12 m7'>
        <div className='card big '>
          <div className='card-image'>
            <img src={news.urlToImage} alt='Card image cap' />
            <span className='card-title'>{`"${news.source.name}"`}</span>
          </div>
          <div className='card-content'>
            <p>{`"${news.content}"`}</p>
          </div>
          <div className='card-action'>
            <a href={news.url}>{`"${news.title}"`}</a>
          </div>
        </div>
        <SavedButton news={news} />
        <LikeButton news={news} />
      </div>
    </div>
  );
}
