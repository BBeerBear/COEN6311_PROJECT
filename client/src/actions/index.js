import axios from 'axios';
import { FETCH_USER, FETCH_NEWS, FETCH_Activity } from './types';

//access to dispatch function, no need to return action
export const fetchUser = () => async (dispatch) => {
  //get the user data from google login
  const res = await axios.get('/api/current_user');
  //send the action to the reducer
  dispatch({ type: FETCH_USER, payload: res.data });
};

//Update Acitivity: save User saved news to db
export const saveUserSavedNewsToDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/save/activity/savednews', params);
  dispatch({ type: FETCH_Activity, payload: res.data });
};

//Get Activity
export const fetchActivity = () => async (dispatch) => {
  const res = await axios.get('/api/mongodb/get/acitivity');
  dispatch({ type: FETCH_Activity, payload: res.data });
};

export const fetctNewsFromDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/get/news', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const saveNewsToDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/save/news', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const fetctNewsFromGoogleTrends = (params) => async (dispatch) => {
  const res = await axios.post('/api/googletrends/get', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const fecthNewsFromAPI = (params) => async (dispatch) => {
  const res = await axios.post('/api/news/get', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};
