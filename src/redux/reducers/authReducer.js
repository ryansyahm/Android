import { LOGIN, LOGOUT } from '../types';

const INITIAL_STATE = {
  username: '',
  isSignedIn: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        username: action.payload,
        isSignedIn: true,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
