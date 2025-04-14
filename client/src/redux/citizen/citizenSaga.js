import { call, put, takeLatest } from "redux-saga/effects";
import axiosInstance from "../../../axiosConfig";  // Ensure axiosInstance is correctly imported
import {
  LOGIN_CITIZEN_REQUEST,
  SIGNUP_CITIZEN_REQUEST,
} from "./citizenActionTypes";
import {
  loginCitizenSuccess,
  loginCitizenFailure,
  signupCitizenSuccess,
  signupCitizenFailure,
} from "./citizenActions";

// Saga to handle the citizen login
function* handleCitizenLogin(action) {
  const { credentials, navigate } = action.payload;
  try {
    // Make API call to login
    const res = yield call(axiosInstance.post, '/citizens/login', credentials); 
    const { authtoken, LoggedInUser } = res.data;  // Ensure this matches your API response
    yield put(loginCitizenSuccess(LoggedInUser, authtoken));  // Dispatch success action
    localStorage.setItem("citizenToken", authtoken);  // Store token in local storage
    navigate("/citizen-dashboard");  // Redirect to dashboard
  } catch (err) {
    // Handle error by dispatching failure action
    yield put(loginCitizenFailure(err.response?.data?.error || "Login failed"));
  }
}

// Saga to handle the citizen signup
function* handleCitizenRegistration(action) {
  const { userData, navigate } = action.payload;
  try {
    // Make API call to signup
    const res = yield call(axiosInstance.post, '/citizens/registration', userData);
    const newUser = res.data;  // Assuming the response contains the newly created user
    yield put(signupCitizenSuccess(newUser));  // Dispatch success action
    navigate("/citizen-login");  // Redirect to login page after successful signup
  } catch (err) {
    // Handle error by dispatching failure action
    yield put(signupCitizenFailure(err.response?.data?.error || "Signup failed"));
  }
}

// Watcher function to listen for the LOGIN_CITIZEN_REQUEST action
export default function* citizenSaga() {
  yield takeLatest(LOGIN_CITIZEN_REQUEST, handleCitizenLogin);  // Listen for login request
  yield takeLatest(SIGNUP_CITIZEN_REQUEST, handleCitizenRegistration);  // Listen for signup request
}
