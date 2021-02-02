import React from 'react'
import Post from './Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
  let postsElement = props.posts
    .map(post => {
      return (
        <Post
          key={post.message + post.id}
          id={post.id}
          src={post.src}
          message={post.message}
          likesCount={post.likesCount}
        />
      )
    })

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (event) => {
    let text = event.target.value
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.my_posts}>
      <h3>My posts</h3>

      <div className={classes.new_posts}>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          className={classes.news_field}
          placeholder='you news...'
        />
        <button
          onClick={onAddPost}
          className={classes.button_send}
        >
          Add post
        </button>
      </div>
      {postsElement}
    </div>
  )
}

export default MyPosts
