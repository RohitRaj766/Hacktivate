import { all } from 'redux-saga/effects';
import userSignupSaga from './userSignupSaga';
import userLoginSaga from './userLoginSaga';
import userLogoutSaga from './userLogoutSaga';
import userVerifyOtpSaga  from './userVerifyOtpSaga';
import adminLoginSaga from './adminLoginSaga';
import authSaga from './forgotpasswordSaga';
import LogoutAdminSaga from './adminLogoutSaga';

export default function* rootSaga() {
  yield all([
    userSignupSaga(),
    userLoginSaga(),
    userLogoutSaga(),
    userVerifyOtpSaga(),
    adminLoginSaga(),
    authSaga(),
    LogoutAdminSaga(),

  ]);
}
