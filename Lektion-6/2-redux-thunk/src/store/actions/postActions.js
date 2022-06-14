import actiontypes from '../actiontypes'
import axios from 'axios'

export const getPost = (id) => {
  return async (dispatch) => {
    dispatch({ type: actiontypes().post.getPost })

    try {
      const res = await axios.get('http://localhost:8080/posts/' + id)
      dispatch(getPostSuccess(res.data))
    } 
    catch(err) {
      dispatch(getPostFailure(err.message))
    }

  }
}

const getPostSuccess = (post) => {
  return {
    type: actiontypes().post.getPostSuccess,
    payload: post
  }
}

const getPostFailure = (err) => {
  return {
    type: actiontypes().post.getPostFailure,
    payload: err
  }
}

export const clearPost = () => {
  return {
    type: actiontypes().post.clearPost
  }
}