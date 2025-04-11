export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";



export const VERIFY_OTP_REQUEST = "VERIFY_OTP_REQUEST";
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS";
export const VERIFY_OTP_FAILURE = "VERIFY_OTP_FAILURE";


export const REQUEST_PASSWORD_RESET = 'REQUEST_PASSWORD_RESET';
export const REQUEST_PASSWORD_RESET_SUCCESS = 'REQUEST_PASSWORD_RESET_SUCCESS';
export const REQUEST_PASSWORD_RESET_FAILURE = 'REQUEST_PASSWORD_RESET_FAILURE';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';


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


export const requestPasswordReset = (email) => ({
    type: REQUEST_PASSWORD_RESET,
    payload: email,
  });
  
  export const resetPassword = (token, email, newPassword) => ({
    type: RESET_PASSWORD,
    payload: { token, email, newPassword },
  });
