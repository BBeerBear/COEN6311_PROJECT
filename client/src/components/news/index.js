import './style.css';

import { categories } from '../../data/categoriesList';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';
import { newsReducer } from '../../functions/reducers';
import NewsItem from './NewsItem';
export default function News({ user }) {
  const state = useSelector((state) => ({ ...state }));
  const [{ loading, error, news }, dispatch] = useReducer(newsReducer, {
    loading: false,
    news: [],
    error: '',
  });
  console.log(news);
  const getNewsByPreferred = async () => {
    try {
      dispatch({ type: 'NEWS_REQUEST' });
      const categories = user.preferredCategories;
      const { data } = await axios.post('/api/getNews', {
        category: categories,
        country: user.country,
      });
      dispatch({ type: 'NEWS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'NEWS_ERROR', payload: error.response.data.message });
    }
  };

  const getNewsByCategory = async (category) => {
    try {
      dispatch({ type: 'NEWS_REQUEST' });
      const { data } = await axios.post('/api/getNews', {
        category,
      });
      dispatch({ type: 'NEWS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'NEWS_ERROR', payload: error.response.data.message });
    }
  };
  const getNewsByLoc = async () => {
    try {
      dispatch({ type: 'NEWS_REQUEST' });
      const { data } = await axios.post('/api/getNews', {
        country: user.country,
      });
      dispatch({ type: 'NEWS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'NEWS_ERROR', payload: error.response.data.message });
    }
  };
  return (
    <>
      <div className='wrap_container'>
        <button onClick={() => getNewsByPreferred()}>For you</button>
        <button onClick={() => getNewsByLoc()}>Local News</button>
        {categories.map((category, i) => (
          <button key={i} onClick={() => getNewsByCategory(category.value)}>
            {category.label}
          </button>
        ))}
      </div>
      {!loading && (
        <div className='posts'>
          {news.map((news) => (
            <>
              <NewsItem key={news._id} news={news} user={user} />
            </>
          ))}
        </div>
      )}
    </>
  );
}
