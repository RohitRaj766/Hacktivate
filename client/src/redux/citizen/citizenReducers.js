// redux/citizen/citizenReducer.js

import {
  LOGIN_CITIZEN_REQUEST,
  LOGIN_CITIZEN_SUCCESS,
  LOGIN_CITIZEN_FAILURE,
  CITIZEN_SIGNUP_REQUEST,
  CITIZEN_SIGNUP_SUCCESS,
  CITIZEN_SIGNUP_FAILURE,
} from './citizenActionTypes';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const citizenReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CITIZEN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_CITIZEN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case LOGIN_CITIZEN_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case CITIZEN_SIGNUP_REQUEST:
      return { ...state, loading: true, error: null }; // Start loading on signup request
    case CITIZEN_SIGNUP_SUCCESS:
      return { ...state, user: action.payload, error: null, loading: false }; // On success, update user
    case CITIZEN_SIGNUP_FAILURE:
      return { ...state, error: action.payload, loading: false }; // On failure, set error

    default:
      return state;
  }
};

export default citizenReducer;
