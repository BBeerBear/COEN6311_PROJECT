import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import trendsReducer from './trendsReducer';

export default combineReducers({
  auth: authReducer,
  trends: trendsReducer,
  profile: profileReducer,
});
