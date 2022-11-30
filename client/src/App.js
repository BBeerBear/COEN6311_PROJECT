import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotLoggedInRoutes from './routes/NotLoggedInRoutes';
import LoggedInRoutes from './routes/LoggedInRoutes';
import Login from './pages/login';
import Profile from './pages/profile';
import Home from './pages/home';
import Friends from './pages/friends';
export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/profile/:userId' element={<Profile />} />
          <Route exact path='/friends' element={<Friends />} />
          <Route exact path='/friends/:type' element={<Friends />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} exact />
        </Route>
      </Routes>
    </div>
  );
}
