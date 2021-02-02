import React from 'react'
import {addPostAction, updatePostAction} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().profilePage

        let addPost = () => {
          store.dispatch(addPostAction())
        }

        let onPostChange = (text) => {
          let action = updatePostAction(text)
          store.dispatch(action)
        }

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.posts}
            newPostText={state.newPostText}
          />
        )
      }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
