import axios from 'axios';
import {
  FETCH_USER,
  FETCH_USERS,
  FETCH_NEWS,
  FETCH_OTHER_USER,
  FETCH_AUTH,
} from './types';

//access to dispatch function, no need to return action
export const fetchUser = () => async (dispatch) => {
  //get the user data from google login
  const res = await axios.get('/api/current_user');
  //send the action to the reducer
  dispatch({ type: FETCH_USER, payload: res.data });
  dispatch({ type: FETCH_AUTH, payload: res.data });
};

//Update Acitivity: save User saved news to db
export const saveNews = (params) => async (dispatch) => {
  const res = await axios.post('/api/user/news/save', params);
  dispatch({ type: FETCH_USER, payload: res.data });
};

//Update Acitivity: save User liked news to db
export const likeNews = (params) => async (dispatch) => {
  // const res = await axios.post(
  //   `${process.env.REACT_APP_BACKEND_URL}/api/user/news/like`,
  //   params
  // );

  const res = await axios.post('/api/user/news/like', params);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// //Get Activity
// export const getSaveNews = () => async (dispatch) => {
//   const res = await axios.get('/api/mongodb/get/acitivity//savednews');
//   // console.log(res.data);
//   dispatch({ type: FETCH_NEWS, payload: res.data });
// };

export const fecthNewsFromAPI = (params) => async (dispatch) => {
  const res = await axios.post('/api/news/get', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

// Create or update profile
export const updateUserProfile = (params) => async (dispatch) => {
  const res = await axios.post('/api/user/profile/update', params);
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

// Get users
export const getUsers = () => async (dispatch) => {
  const res = await axios.get('/api/user/others');
  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};

// Get users
export const getUserById = (userId) => async (dispatch) => {
  const res = await axios.get(`/api/user/${userId}`);
  dispatch({
    type: FETCH_OTHER_USER,
    payload: res.data,
  });
};
