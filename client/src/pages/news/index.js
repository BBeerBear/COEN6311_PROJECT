import { useSelector } from 'react-redux';

import Categories from '../../components/news/Categories';
import NewsList from '../../components/news/NewsList';
export default function News() {
  const { user, news } = useSelector((state) => ({ ...state }));
  // const { user } = useSelector((news) => ({ ...news }));
  return (
    <div class='row'>
      <Categories />
      <NewsList user={user} news={news} />
    </div>
  );
}
