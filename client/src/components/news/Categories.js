import { categories } from './categoriesList';
import Searchbar from './Searchbar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function Categories() {
  const { user } = useSelector((user) => ({ ...user }));
  const dispatch = useDispatch();
  const onClickRecNews = () => {
    user?.preferredCategories.map(async (category) => {
      const { data } = await axios.post('/api/news/get', {
        country: user.country,
        category,
        pageSize: 10,
      });
      dispatch({ type: 'FETCH_NEWS', payload: data });
    });
  };
  const onClickCatNews = async (category) => {
    const { data } = await axios.post('/api/news/get', {
      category,
    });
    dispatch({ type: 'FETCH_NEWS', payload: data });
  };
  const onClickLocNews = async () => {
    const { data } = await axios.post('/api/news/get', {
      country: user.country,
    });
    dispatch({ type: 'FETCH_NEWS', payload: data });
  };
  const onClickSavedNews = async () => {
    const { data } = await axios.post('/api/user/news/get/savednews', {
      user,
    });
    dispatch({ type: 'FETCH_NEWS', payload: data });
  };
  return (
    <nav>
      <div className='nav-wrapper center'>
        <div className='col s12'>
          <a href='#' className='breadcrumb' onClick={onClickRecNews}>
            Recommended News
          </a>
          <a href='#' className='breadcrumb' onClick={onClickLocNews}>
            Local News
          </a>
          {categories.map((category) => (
            <a
              href='#'
              onClick={() => {
                onClickCatNews(category.value);
              }}
              className='breadcrumb'
            >
              {category.label}
            </a>
          ))}
          <a href='#' className='breadcrumb' onClick={onClickSavedNews}>
            My Saved News
          </a>
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}
