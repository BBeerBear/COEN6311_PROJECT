import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotLoggedInRoutes from './routes/NotLoggedInRoutes';
import LoggedInRoutes from './routes/LoggedInRoutes';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import Friends from './pages/friends';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Messenger from './pages/messenger/Messenger';
export default function App() {
  useEffect(() => {
    getUser();
  });
  const dispatch = useDispatch();
  const getUser = async () => {
    const { data } = await axios.get(`/api/current_user`);

    dispatch({
      type: 'LOGIN',
      payload: data,
    });
  };
  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/profile/:userId' element={<Profile />} />
          <Route exact path='/friends' element={<Friends />} />
          <Route exact path='/friends/:type' element={<Friends />} />
          <Route exact path='/messenger' element={<Messenger />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} exact />
        </Route>
      </Routes>
    </div>
  );
}
