// Action Creators
import {
    CITIZEN_SIGNUP_REQUEST,
    CITIZEN_SIGNUP_SUCCESS,
    CITIZEN_SIGNUP_FAILURE,
    LOGIN_CITIZEN_REQUEST,
    LOGIN_CITIZEN_SUCCESS,
    LOGIN_CITIZEN_FAILURE
  } from "./citizenActionTypes";
  

  export const citizenSignupRequest = (formData) => ({
    type: CITIZEN_SIGNUP_REQUEST,
    payload: formData,
  });
  
  export const citizenSignupSuccess = (user) => ({
    type: CITIZEN_SIGNUP_SUCCESS,
    payload: user,
  });
  
  export const citizenSignupFailure = (error) => ({
    type: CITIZEN_SIGNUP_FAILURE,
    payload: error,
  });

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
  