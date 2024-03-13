import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// 이전 상태와 액션을 통해 다음 상태를 만들어 내는 함수
// combine Reducers로 나누어 놓은 리듀서들을 합친다.
const rootReducer = combineReducers({
  // 서버사이드 랜더링을 위해 추가
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
