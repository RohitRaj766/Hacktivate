import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    LOGIN_REQUEST,
    SIGNUP_REQUEST,
    VERIFY_OTP_REQUEST,
    VERIFY_TOKEN_HANDLE_REFRESH_SUCCESS,
    VERIFY_TOKEN_HANDLE_REFRESH_FAILURE,
    VERIFY_TOKEN_HANDLE_REFRESH_REQUEST,
    SUBMIT_RESULT_SUCCESS,
    SUBMIT_RESULT_FAILURE,
    SUBMIT_RESULT_REQUEST
  } from "../actions/index";
  
  const initialState = {
    user: null,
    error: null,
    isAuthenticated: false,
    signupMessage: null,
    otpMessage: null,
    otpError: null,
    isLoading: false,
    leaderboardData: [],
    fetchedData: [],
    fetchDataError: null,
    quizData: null,
    quizError: null,
    resultSubmissionSuccess: false,
    resultSubmissionError: null,
    attemptedQuizzes:[],
    message:null,
    completedQuizes:[]
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
  
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false
        };
  
      case LOGOUT_FAILURE:
        return {
          ...state
        };
  
      case SUBMIT_RESULT_REQUEST:
        return {
          ...state,
          isLoading: true,
          resultSubmissionError: null,
        };

      case SUBMIT_RESULT_SUCCESS:
        return { ...state, isLoading: false, resultSubmissionSuccess: true };
      case SUBMIT_RESULT_FAILURE:
        return {
          ...state,
          isLoading: false,
          resultSubmissionError: action.payload,
        };

      default:
        return state;
    }
  };
  
  export default userauthReducer;