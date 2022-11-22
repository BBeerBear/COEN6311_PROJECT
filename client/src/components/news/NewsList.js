import React from 'react';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';

export default function NewsList() {
  const { news } = useSelector((news) => ({ ...news }));
  return (
    <div className='container my-3 '>
      <div className='row'>
        {news?.map((news, i) => {
          return (
            <div className='col-md-4 col-sm-6 col-xs-12' key={i}>
              <NewsItem news={news} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
