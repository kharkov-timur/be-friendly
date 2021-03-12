import React from 'react'
import Post from './Post/Post'
import classes from './MyPosts.module.css'
import {MyPostReduxForm} from './MyPostsForm'

const MyPosts = (props) => {
  let postsElement = props.posts
    .map(post => {
      return (
        <Post
          key={post.id}
          id={post.id}
          src={post.src}
          message={post.message}
          likesCount={post.likesCount}
        />
      )
    })

  const onAddPost = (values) => {
    props.addPost(values.post)
  }

  return (
    <div className={classes.my_posts}>
      <h3>My posts</h3>
      <MyPostReduxForm onSubmit={onAddPost} />
      {postsElement}
    </div>
  )
}

export default MyPosts
