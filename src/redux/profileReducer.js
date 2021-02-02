import {ADD_POST, UPDATE_POST} from './action'

let initialState = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are you?',
      src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      likesCount: 12
    },
    {
      id: 2,
      message: 'It\'s my first post',
      src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      likesCount: 11
    },
    {
      id: 3,
      message: 'Blabla',
      src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      likesCount: 11
    },
    {
      id: 4,
      message: 'Dada',
      src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      likesCount: 11
    }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
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
