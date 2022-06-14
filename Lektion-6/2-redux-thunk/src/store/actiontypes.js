const actiontypes = () => {
  return {
    posts: {
      getPosts: 'GET_POSTS',
      getPostsSuccess: 'GET_POSTS_SUCCESS',
      getPostsFailure: 'GET_POSTS_FAILURE'
    },
    post: {
      getPost: 'GET_POST',
      getPostSuccess: 'GET_POST_SUCCESS',
      getPostFailure: 'GET_POST_FAILURE',
      clearPost: 'CLEAR_POST'
    }
  }
}

export default actiontypes