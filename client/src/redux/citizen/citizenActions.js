// Action Creators
import {
    LOGIN_CITIZEN_REQUEST,
    LOGIN_CITIZEN_SUCCESS,
    LOGIN_CITIZEN_FAILURE,
  } from "./citizenActionTypes";
  
  export const loginCitizenRequest = (payload) => ({
    type: LOGIN_CITIZEN_REQUEST,
    payload,
  });
  
  export const loginCitizenSuccess = (user, token) => ({
    type: LOGIN_CITIZEN_SUCCESS,
    payload: { user, token },
  });
  
  export const loginCitizenFailure = (error) => ({
    type: LOGIN_CITIZEN_FAILURE,
    payload: error,
  });
  