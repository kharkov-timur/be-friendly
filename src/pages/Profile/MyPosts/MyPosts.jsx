import React from 'react'
import Post from './Post/Post'
import classes from './MyPosts.module.css'
import {
  addPostAction,
  updatePostAction
} from '../../../redux/state'


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

  const onPostChange = (event) => {
    let text = event.target.value
    props.dispatch(updatePostAction(text))
  }

  const addPost = () => {
    props.dispatch(addPostAction())
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
          onClick={addPost}
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
