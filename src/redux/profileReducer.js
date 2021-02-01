import {ADD_POST, UPDATE_POST} from './action'

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_POST:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostAction = () => ({
  type: ADD_POST
})

export const updatePostAction = (text) => ({
  type: UPDATE_POST,
  newText: text
})

export default profileReducer
