import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,

    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,

    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAILURE,
    VERIFY_OTP_REQUEST,

    REQUEST_PASSWORD_RESET,
    REQUEST_PASSWORD_RESET_SUCCESS,
    REQUEST_PASSWORD_RESET_FAILURE,

    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,


  } from "../actions/index";
  
  const initialState = {
    user: null,
    error: null,
    // isAuthenticated: false,
    signupMessage: null,
    otpMessage: null,
    otpError: null,
    isLoading: false,
    fetchedData: [],
    fetchDataError: null,
    message:null,

  };
  
  const userauthReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
          isLoading: false,
          error: null
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: action.payload
        };
  
      case SIGNUP_REQUEST:
        return {
          ...state,
          isLoading: true
        };
  
      case SIGNUP_SUCCESS:
        return {
          ...state,
          signupMessage: action.payload,
          isLoading: false,
          error: null
        };
  
      case SIGNUP_FAILURE:
        return {
          ...state,
          signupMessage: null,
          isLoading: false,
          error: action.payload
        };
  
      case VERIFY_OTP_REQUEST:
        return {
          ...state,
          isLoading: true
        };
  
      case VERIFY_OTP_SUCCESS:
        return {
          ...state,
          otpMessage: action.payload,
          isLoading: false,
          otpError: null
        };
  
      case VERIFY_OTP_FAILURE:
        return {
          ...state,
          otpMessage: null,
          isLoading: false,
          otpError: action.payload
        };

              case REQUEST_PASSWORD_RESET:
                  return { ...state, loading: true, error: null };
                case REQUEST_PASSWORD_RESET_SUCCESS:
                  return { ...state, loading: false, message: action.payload.message };
                case REQUEST_PASSWORD_RESET_FAILURE:
                  return { ...state, loading: false, error: action.payload.error };
                case RESET_PASSWORD:
                  return { ...state, loading: true, error: null };
                case RESET_PASSWORD_SUCCESS:
                  return { ...state, loading: false, message: action.payload.message };
                case RESET_PASSWORD_FAILURE:
                  return { ...state, loading: false, error: action.payload.error }; 

      default:
        return state;
    }
  };
  
  export default userauthReducer;