import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearPost, getPost } from '../store/actions/postActions'

const PostDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost(id))

    return () => dispatch(clearPost())
    
  }, [dispatch, id])

  const { post, error, loading } = useSelector(state => state.post)

  if(error) return (
    <div>
      <h3>{error}</h3>
    </div>
  )
  if(loading) return (
    <div>
      <h3>Loading..</h3>
    </div>
  )

  if(post) return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetails