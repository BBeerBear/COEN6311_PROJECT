import './style.css';

import { categories } from '../../data/categoriesList';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useReducer } from 'react';
import { newsReducer } from '../../functions/reducers';
import NewsItem from './NewsItem';
import CreatePost from '../createPost';
export default function News() {
  const { user } = useSelector((user) => ({ ...user }));
  const [{ loading, error, news }, dispatch] = useReducer(newsReducer, {
    loading: false,
    news: [],
    error: '',
  });
  const getNewsByPreferred = () => {
    try {
      dispatch({ type: 'NEWS_REQUEST' });
      let preferredNews = [];
      user?.preferredCategories.map(async (category) => {
        const { data } = await axios.post('/api/getNews', {
          country: user.country,
          category,
          pageSize: 10,
        });
        preferredNews = [...data];
      });
      dispatch({ type: 'NEWS_SUCCESS', payload: preferredNews });
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
  const getSaveNews = async () => {};
  return (
    <>
      <div className='wrap_container'>
        <button onClick={() => getNewsByPreferred()}>Recommended News</button>
        <button onClick={() => getNewsByLoc()}>Local News</button>
        {categories.map((category, i) => (
          <button key={i} onClick={() => getNewsByCategory(category.value)}>
            {category.label}
          </button>
        ))}
        <button onClick={() => getSaveNews()}>My Saved News</button>
      </div>
      <div className='posts'>
        {news.map((news) => (
          <>
            <NewsItem key={news._id} news={news} user={user} />
          </>
        ))}
      </div>
    </>
  );
}
