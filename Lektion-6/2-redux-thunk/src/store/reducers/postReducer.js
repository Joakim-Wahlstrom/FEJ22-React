import actiontypes from "../actiontypes"

const initState = {
  post: null,
  loading: false,
  error: null
}

const postReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().post.getPost:
      return {
        ...state,
        loading: true
      }

    case actiontypes().post.getPostSuccess:
      return {
        ...state,
        post: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().post.getPostFailure:
      return {
        ...state,
        post: null,
        loading: false,
        error: action.payload
      }

    case actiontypes().post.clearPost:
      return {
        ...state,
        post: null
      }

    default:
      return state
  }
}
export default postReducer