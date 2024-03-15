import {
  all,
  fork,
  takeEvery,
  takeLatest, // 클릭을 실수로 두 번 했을 때 마지막 요청만 허용하고 다른 작업을 날려 준다. (응답만 취소, 요청 취소 X)
  // 따라서 backend에서 데이터 저장할 때 중복인지 검사해 줘야 한다.
  call,
  put,
  throttle,
  delay,
} from "redux-saga/effects";
import axios from "axios";

import {
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function signUpAPI() {
  return axios.post("/api/signUp");
}

function* logIn(action) {
  try {
    console.log("saga logIn");
    yield delay(1000);
    // fork : 논 블로킹, call : 비동기 (값이 넘어올 때까지 기다림)
    // const result = yield call(logInAPI, action.data); // 클라이언트가 입력한 데이터가 action.data에 담겨 있다.
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    console.log("saga logout");
    yield delay(1000);
    // fork : 논 블로킹, call : 비동기 (값이 넘어올 때까지 기다림)
    // const result = yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function* signUp() {
  try {
    yield delay(1000);

    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// take는 일회용이라 한 번 로그인하고 로그아웃하면 더 이상 사용할 수 없다.
// 이래서 while을 사용해서 무한 이벤트 리스너를 만들어 주는 것.
// 대신 직관적이지 않아 takeEvery를 사용한다.
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
