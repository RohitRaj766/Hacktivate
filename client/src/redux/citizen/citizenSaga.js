// src/redux/citizen/citizenSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import axiosInstance from "../../../axiosConfig";
import {
  LOGIN_CITIZEN_REQUEST,
} from "./citizenActionTypes";
import {
  loginCitizenSuccess,
  loginCitizenFailure,
} from "./citizenActions";

function* handleCitizenLogin(action) {
  const { credentials, navigate } = action.payload;
  try {
    const res = yield call(() =>
      axios.post(axiosInstance.post, '/citizens/login', credentials)
    );
    const { authtoken, LoggedInUser } = res.data;
    yield put(loginCitizenSuccess(LoggedInUser, authtoken));
    localStorage.setItem("citizenToken", authtoken);
    navigate("/citizen-dashboard");
  } catch (err) {
    yield put(loginCitizenFailure(err.response?.data?.error || "Login failed"));
  }
}

export default function* citizenSaga() {
  yield takeLatest(LOGIN_CITIZEN_REQUEST, handleCitizenLogin);
}
