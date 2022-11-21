import { FETCH_USER, FETCH_USERS, FETCH_OTHER_USER } from '../actions/types';

const initialState = {
  user: null,
  users: [],
  loading: true,
  otherUser: null,
};

//the reducer change the state
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case FETCH_OTHER_USER:
      return {
        ...state,
        otherUser: payload,
        loading: false,
      };
    default:
      return state;
  }
}
