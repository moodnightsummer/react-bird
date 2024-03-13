const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpDate: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

// action creator
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

// 이전 상태와 액션을 통해 다음 상태를 만들어 내는 함수
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
        },
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      };
  }
};

export default rootReducer;
