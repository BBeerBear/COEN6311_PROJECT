<<<<<<< HEAD
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
=======
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
>>>>>>> f5a64b308e02a9dc778d5f5421b86dee064c92cb

import NotLoggedInRoutes from './routes/NotLoggedInRoutes';
import LoggedInRoutes from './routes/NotLoggedInRoutes';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';

export default function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    const { data } = await axios.get('/api/current_user');
    dispatch({ type: 'LOGIN', payload: data });
  };
  useEffect(() => {
    getUser();
  });

<<<<<<< HEAD
  render() {
    return (
      // <div className='container'>
      <div>
        <BrowserRouter>
          <div class='row'>
            <div class='col s2'>
              <Sidenav />
            </div>
            <div class='col s10'>
              <Header />
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/profile' component={ProfileEdit} />
              <Route exact path='/profile/me' component={ProfileMe} />
              <Route exact path='/profile/others' component={ProfileList} />
            </div>
          </div>
          <Route exact path='/savednews' />
        </BrowserRouter>
      </div>
      // </div>
    );
  }
=======
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/profile/:userId' element={<Profile />} />
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} exact />
        </Route>
      </Routes>
    </div>
  );
>>>>>>> f5a64b308e02a9dc778d5f5421b86dee064c92cb
}
