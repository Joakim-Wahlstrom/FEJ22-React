import React from 'react'
import styles from './BlogList.module.css'

const BlogList = ({ blogs }) => {
  return (
    <div>
      {
        blogs.map(blog => (
          <div key={blog.id} className={styles.card}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <button>Delete blog</button>
          </div>
        ))
      }
    </div>
  )
}

export default BlogList