import {ADD_POST, SET_STATUS, SET_USER_PROFILE} from './action'
import {profileAPI, usersAPI} from '../api/api'

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
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length + 1,
        message: action.newText,
        src: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      }
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}

export const addPostAction = (newText) => ({
  type: ADD_POST,
  newText
})

export const setUsersProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(res => {
      dispatch(setUsersProfile(res.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(res => {
      dispatch(setStatus(res.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}

export default profileReducer
