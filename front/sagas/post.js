import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from "../reducers/post";

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost() {
  try {
    // fork : 논 블로킹, call : 비동기 (값이 넘어올 때까지 기다림)
    const result = yield call(addPostAPI);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addCommentAPI(id) {
  return axios.post(`/api/post/${id}/comment`);
}

function* addComment() {
  try {
    // fork : 논 블로킹, call : 비동기 (값이 넘어올 때까지 기다림)
    const result = yield call(addCommentAPI);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  // throttle은 여러 번 요청이 들어왔을 때 뒤에 초만큼 요청을 막아 둔다.
  // yield throttle("ADD_POST", addPost, 10000);
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
