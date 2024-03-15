export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "재일",
      },
      content: "첫 번째 게시글 #해시태그 #내가최고 ###내가짱",
      Images: [
        {
          src: "https://velog.velcdn.com/images/mcc919/post/b38b234b-9d72-48ed-988e-a07d0a667927/git.png",
        },
        {
          src: "https://blog.kakaocdn.net/dn/3OZ20/btrjD2ydkWU/NqYTsTO0jZrd8ewcGHwCHK/img.jpg",
        },
        {
          src: "https://blog.kakaocdn.net/dn/3OZ20/btrjD2ydkWU/NqYTsTO0jZrd8ewcGHwCHK/img.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "jelly",
          },
          content: "우와~",
        },
        {
          User: {
            nickname: "jwitter",
          },
          content: "반가워요.",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

// 상수로 빼면 const 값을 그대로 가지고 올 수 있음.

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "재일",
  },
  content: "ddd",
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
