import 'materialize-css/dist/css/materialize.min.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Header from './components/header/Header';
import Landing from './components/pages/home/Landing';
import ProfileEdit from './components/profile/ProfileEdit';
import Dashboard from './components/pages/news/NewsPage';
import Sidenav from './components/sidenav/Sidenav';
import ProfileList from './components/profile/ProfileList';
import ProfileMe from './components/profile/ProfileMe';

export default function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    const { data } = await axios.get('/api/current_user');
    //send the action to the reducer
    dispatch({ type: 'LOGIN', payload: data });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div class='row'>
        <div class='col s2'>
          <Sidenav />
        </div>
        <div class='col s10'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/news' element={<Dashboard />} />
            <Route exact path='/profile' element={<ProfileEdit />} />
            <Route exact path='/profile/me' element={<ProfileMe />} />
            <Route exact path='/profile/others' element={<ProfileList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
