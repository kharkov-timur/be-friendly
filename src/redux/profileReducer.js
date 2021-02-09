import {ADD_POST, SET_USER_PROFILE, UPDATE_POST} from './action'

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
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
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

export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export default profileReducer
