import { FETCH_USERS, FETCH_OTHER_USER } from '../actions/types';

const initialState = {
  user: null,
  users: [],
  loading: true,
};

//the reducer change the state
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case FETCH_OTHER_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    default:
      return state;
  }
}
