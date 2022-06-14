import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Post from '../components/Post'
import { getPosts } from '../store/actions/postsActions'

const Posts = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  // const posts = useSelector(state => state.posts.list)
  // const loading = useSelector(state => state.posts.loading)
  // const error = useSelector(state => state.posts.error)

  const { list: posts, error, loading } = useSelector(state => state.posts)

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

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts