import { combineReducers } from 'redux';
import trendsReducer from './trendsReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  user: userReducer,
  trends: trendsReducer,
  auth: authReducer,
});
