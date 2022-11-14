import React from 'react';

import Categories from '../news/Categories';
import NewsList from '../news/NewsList';

const Dashboard = () => {
  return (
    <div class='row'>
      <div class='col s2'></div>

      <div class='col s10'>
        <Categories />
        <NewsList />
      </div>
    </div>
  );
};

export default Dashboard;
