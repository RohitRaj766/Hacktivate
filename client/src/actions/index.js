export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";


export const VERIFY_OTP_REQUEST = "VERIFY_OTP_REQUEST";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_FAILURE = "VERIFY_OTP_FAILURE";

export const SUBMIT_RESULT_REQUEST = "SUBMIT_RESULT_REQUEST";
export const SUBMIT_RESULT_SUCCESS = "SUBMIT_RESULT_SUCCESS";
export const SUBMIT_RESULT_FAILURE = "SUBMIT_RESULT_FAILURE";



export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const signupRequest = (userData) => ({
  type: SIGNUP_REQUEST,
  payload: userData,
});

export const signupSuccess = (message) => ({
  type: SIGNUP_SUCCESS,
  payload: message,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
export const logoutFailure = () => ({
  type: LOGOUT_FAILURE,
});



export const verifyOtpRequest = (otpData) => ({
  type: VERIFY_OTP_REQUEST,
  payload: otpData,
});

export const verifyOtpSuccess = (message) => ({
  type: VERIFY_OTP_SUCCESS,
  payload: message,
});

export const verifyOtpFailure = (error) => ({
  type: VERIFY_OTP_FAILURE,
  payload: error,
});


export const submitResultRequest = (resultData) => ({
  type: SUBMIT_RESULT_REQUEST,
  payload: resultData,
});

export const submitResultSuccess = (response) => ({
  type: SUBMIT_RESULT_SUCCESS,
  payload: response,
});

export const submitResultFailure = (error) => ({
  type: SUBMIT_RESULT_FAILURE,
  payload: error,
});

