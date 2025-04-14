import {
    LOGIN_CITIZEN_REQUEST,
    LOGIN_CITIZEN_SUCCESS,
    LOGIN_CITIZEN_FAILURE,
  } from "./citizenActionTypes";
  
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
      default:
        return state;
    }
  };
  
  export default citizenReducer;
  