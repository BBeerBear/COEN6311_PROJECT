import { FETCH_USERS } from '../actions/types';

//the reducer change the state
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload || false;
    default:
      return state;
  }
}
