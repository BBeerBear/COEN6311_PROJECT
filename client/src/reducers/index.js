import { combineReducers } from 'redux';
import activityReducer from './activityReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import trendsReducer from './trendsReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  trends: trendsReducer,
  profile: profileReducer,
  activity: activityReducer,

  users: userReducer,
});
