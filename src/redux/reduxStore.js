import {applyMiddleware, combineReducers, createStore} from 'redux'
import appReducer from './appReducer'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
  app: appReducer,
  profilePage: profileReducer,
  messagesPage: messageReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store
export default store
