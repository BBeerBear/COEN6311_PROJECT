import axios from 'axios';
import {
  FETCH_USER,
  FETCH_USERS,
  FETCH_NEWS,
  FETCH_Activity,
  GET_PROFILE,
  GET_PROFILES,
} from './types';

//access to dispatch function, no need to return action
export const fetchUser = () => async (dispatch) => {
  //get the user data from google login
  const res = await axios.get('/api/current_user');
  //send the action to the reducer
  dispatch({ type: FETCH_USER, payload: res.data });
};

//Update Acitivity: save User saved news to db
export const saveSavedNewsOfActivity = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/save/activity/savednews', params);
  dispatch({ type: FETCH_Activity, payload: res.data });
};

//Update Acitivity: save User saved news to db
export const savelikedNewsOfActivity = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/save/activity/likednews', params);
  dispatch({ type: FETCH_Activity, payload: res.data });
};

//Get Activity
export const fetchSavedNewsOfActivity = () => async (dispatch) => {
  const res = await axios.get('/api/mongodb/get/acitivity//savednews');
  // console.log(res.data);
  dispatch({ type: FETCH_NEWS, payload: res.data[0].savedNews });
};

//Update Acitivity: save User saved news to db
export const deleteActivitySavedNews = (params) => async (dispatch) => {
  const res = await axios.post(
    '/api/mongodb/delete/activity/savednews',
    params
  );
  dispatch();
};

export const fetctNewsFromDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/get/news', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const saveNewsToDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/save/news', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const fecthNewsFromAPI = (params) => async (dispatch) => {
  const res = await axios.post('/api/news/get', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

// Create or update profile
export const createProfile = (params) => async (dispatch) => {
  const res = await axios.post('/api/profile/update', params);
  dispatch({
    type: GET_PROFILE,
    payload: res.data,
  });
};

// Get profile
export const getProfile = () => async (dispatch) => {
  const res = await axios.get('/api/profile/me');
  dispatch({
    type: GET_PROFILE,
    payload: res.data,
  });
};

// Get profiles
export const getProfiles = () => async (dispatch) => {
  const res = await axios.get('/api/profile/others');
  dispatch({
    type: GET_PROFILES,
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
