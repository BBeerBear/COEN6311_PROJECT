import React from 'react';

import Categories from '../../news/Categories';
import NewsList from '../../news/NewsList';

export default function News() {
  return (
    <div class='row'>
      <Categories />
      <NewsList />
    </div>
  );
}
