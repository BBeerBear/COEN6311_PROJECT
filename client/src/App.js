import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import NotLoggedInRoutes from './routes/NotLoggedInRoutes';
import LoggedInRoutes from './routes/NotLoggedInRoutes';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import Friends from './pages/friends';
export default function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    const { data } = await axios.get('/api/current_user');
    dispatch({ type: 'LOGIN', payload: data });
  };
  useEffect(() => {
    localStorage.setItem('loginTime', new Date());
    getUser();
  });

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/profile/:userId' element={<Profile />} />
        <Route exact path='/friends' element={<Friends />} />
        <Route exact path='/friends/:type' element={<Friends />} />
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} exact />
        </Route>
      </Routes>
    </div>
  );
}
