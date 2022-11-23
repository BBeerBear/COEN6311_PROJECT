// import 'materialize-css/dist/css/materialize.min.css';

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import NotLoggedInRoutes from './routes/NotLoggedInRoutes';
import Login from './pages/login';
import ProfileEdit from './components/profile/ProfileEdit';
import News from './pages/news/NewsPage';
import ProfileList from './components/profile/ProfileList';

import Profile from './pages/profile';
import Home from './pages/home';

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
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/news' element={<News />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/profile/:userId' element={<Profile />} />
        <Route exact path='/profile/edit' element={<ProfileEdit />} />
        <Route exact path='/profile/others' element={<ProfileList />} />
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} exact />
        </Route>
      </Routes>
    </div>
  );
}
