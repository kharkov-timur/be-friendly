import {SET_USER_DATA} from './action'
import {authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, email, login, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
  return authAPI.authUser()
    .then(res => res.data)
    .then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.loginUser(email, password, rememberMe)
    .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(getAuthUserData())
        } else {
          let messages = res.data.messages.length > 0
            ? res.data.messages[0]
            : 'some error'
          dispatch(stopSubmit('login', {_error: messages}))
        }
      }
    )
}

export const logout = () => (dispatch) => {
  authAPI.logoutUser()
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export default authReducer
