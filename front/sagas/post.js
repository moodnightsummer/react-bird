import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

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

function* watchAddPost() {
  // throttle은 여러 번 요청이 들어왔을 때 뒤에 초만큼 요청을 막아 둔다.
  // yield throttle("ADD_POST", addPost, 10000);
  yield takeLatest("ADD_POST", addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
