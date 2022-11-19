export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_ALl":
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPage: action.payload.numberOfPage,
      };

    case "POSTONERILEN":
      return { ...state, posts: action.payload };
    case "POSTID":
      return { ...state, posts: action.payload };
    case "FETCH_BY_SEARCH":
      return { ...state, posts: action.payload };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE":
    case "LIKE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter((p) => p._id !== action.payload),
      };
    default:
      return state;
  }
};
