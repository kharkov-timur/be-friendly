import {SET_INITIALIZED_SUCCESS} from './action'
import {getAuthUserData} from './authReducer'

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const setInitializedSuccess = () => ({
  type: SET_INITIALIZED_SUCCESS,
})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData())
  Promise.all([promise])
    .then(() => {
      dispatch(setInitializedSuccess())
    })
}

export default appReducer
