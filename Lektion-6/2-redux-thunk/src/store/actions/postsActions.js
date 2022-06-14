import actiontypes from '../actiontypes'
import axios from 'axios'

export const getPosts = () => {
  return async (dispatch) => {
    dispatch({ type: actiontypes().posts.getPosts })

    try {
      const res = await axios.get('http://localhost:8080/posts')
      dispatch(getPostsSuccess(res.data))
    } 
    catch(err) {
      dispatch(getPostsFailure(err.message))
    }

  }
}

const getPostsSuccess = (posts) => {
  return {
    type: actiontypes().posts.getPostsSuccess,
    payload: posts
  }
}

const getPostsFailure = (err) => {
  return {
    type: actiontypes().posts.getPostsFailure,
    payload: err
  }
}