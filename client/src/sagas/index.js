import { all } from 'redux-saga/effects';
import userSignupSaga from './userSignupSaga';
import userLoginSaga from './userLoginSaga';
import userVerifyOtpSaga  from './userVerifyOtpSaga';
import adminLoginSaga from './adminLoginSaga';
import authSaga from './forgotpasswordSaga';

export default function* rootSaga() {
  yield all([

    userLoginSaga(),
    userVerifyOtpSaga(),
    adminLoginSaga(),
    forgotpasswordSaga(),
    // authSaga(),
  ]);
}
