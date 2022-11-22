import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import userReducer from './userReducer';

export default combineReducers({
  user: userReducer,
  news: newsReducer,
});
