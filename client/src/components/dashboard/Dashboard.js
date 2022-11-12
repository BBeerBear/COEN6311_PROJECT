import React from 'react';

import Categories from './news/Categories';
import NewsList from '../news/NewsList';

const Dashboard = () => {
  return (
    <div>
      <Categories />
      <NewsList />
    </div>
  );
};

export default Dashboard;
