export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
        return {
            ...state,
            posts:action.payload.data,
            currentPage:action.payload.currentPage,
            numberOfPage:action.payload.numberOfPage
        }
    case FETCH_BY_SEARCH:
        return {...state,posts:action.payload}
    case CREATE:
        return [...state,action.payload]
    case UPDATE:
    case LIKE:
        return  state.map(post=>post._id === action.payload._id ? action.payload : post)
    case DELETE:
        return state.filter(p=>p._id!==action.payload)
    default:
        return state; 
}
};
