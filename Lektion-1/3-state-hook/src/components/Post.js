import { useState } from 'react'
import './Post.css'

const Post = ({ title, body }) => {

  const [isDark, setIsDark] = useState(false)

  const setTheme = () => {
    setIsDark(state => !state)
  }

  return (
    <div className={`post card mb-2 ${isDark && 'dark'}`}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={setTheme}>{isDark ? 'Change to light' : 'Change to dark'}</button>
    </div>
  )
}

export default Post