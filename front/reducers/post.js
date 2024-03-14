export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "재일",
      },
      content: "첫 번째 게시글 #해시태그",
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
};

// t상수로 빼면 const 값을 그대로 가지고 올 수 있음.
const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

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
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
