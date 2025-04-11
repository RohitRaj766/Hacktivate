import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../../axiosConfig';  // import axiosInstance from your utils
import { loginSuccess, loginFailure } from '../actions/userActions';

function* handleLogin(action) {
  try {
    const response = yield call(axiosInstance.post, '/citizens/login', action.payload); // Use axiosInstance here
    const { data } = response;

    // Optionally save token to localStorage
    localStorage.setItem('token', data.authtoken);

    // Dispatch success action
    yield put(loginSuccess(data.LoggedInUser));
    console.log("data :: ", data)
    localStorage.setItem('user', JSON.stringify(data)); // user = { firstname, lastname, ... }
  } catch (err) {
    // Dispatch failure action
    yield put(loginFailure(err.response?.data?.error || 'Login failed'));
  }
}

export default function* userSaga() {
  yield takeLatest('LOGIN_REQUEST', handleLogin);
}
