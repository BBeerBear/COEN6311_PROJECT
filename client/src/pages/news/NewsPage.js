import React from 'react';

import Categories from '../../components/news/Categories';
import NewsList from '../../components/news/NewsList';

export default function News() {
  return (
    <div class='row'>
      <Categories />
      <NewsList />
    </div>
  );
}
