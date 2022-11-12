import axios from 'axios';
import { FETCH_USER, FETCH_NEWS, FETCH_PROFILE } from './types';

//access to dispatch function, no need to return action
export const fetchUser = () => async (dispatch) => {
  //get the user data from google login
  const res = await axios.get('/api/current_user');
  //send the action to the reducer
  dispatch({ type: FETCH_USER, payload: res.data });
};

//save User saved news to db
export const saveUserSavedNewsToDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/save/activity/savednews', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const fetctNewsFromDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/get', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const saveNewsToDB = (params) => async (dispatch) => {
  const res = await axios.post('/api/mongodb/save', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};

export const fetctNewsFromGoogleTrends = (params) => async (dispatch) => {
  const res = await axios.post('/api/googletrends/get', params);
  dispatch({ type: FETCH_NEWS, payload: res.data });
};
