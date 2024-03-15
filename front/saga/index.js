import {
  all,
  fork,
  takeEvery,
  takeLatest, // 클릭을 실수로 두 번 했을 때 마지막 요청만 허용하고 다른 작업을 날려 준다.
  call,
  put,
} from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // fork : 논 블로킹, call : 비동기 (값이 넘어올 때까지 기다림)
    const result = yield call(logInAPI, action.data); // 클라이언트가 입력한 데이터가 action.data에 담겨 있다.
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // fork : 논 블로킹, call : 비동기 (값이 넘어올 때까지 기다림)
    const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    // fork : 논 블로킹, call : 비동기 (값이 넘어올 때까지 기다림)
    const result = yield call(addPostAPI);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

// take는 일회용이라 한 번 로그인하고 로그아웃하면 더 이상 사용할 수 없다.
// 이래서 while을 사용해서 무한 이벤트 리스너를 만들어 주는 것.
// 대신 직관적이지 않아 takeEvery를 사용한다.
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost() {
  yield takeLatest("ADD_POST", addPost);
}

// root 사가 만들어 놓고 비동기 액션 하나씩 넣어주기
export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
