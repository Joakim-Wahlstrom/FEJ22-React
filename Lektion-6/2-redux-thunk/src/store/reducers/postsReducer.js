import actiontypes from "../actiontypes"

const initState = {
  list: [],
  loading: false,
  error: null
}

const postsReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().posts.getPosts:
      return {
        ...state,
        loading: true
      }

    case actiontypes().posts.getPostsSuccess:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().posts.getPostsFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}
export default postsReducer