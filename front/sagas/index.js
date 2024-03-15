import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import postSaga from "./post";

// root 사가 만들어 놓고 비동기 액션 하나씩 넣어주기
export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
