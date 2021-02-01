import {SEND_MESSAGE, UPDATE_MESSAGE} from './action'

const messageReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
        src: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
        likeCount: 0,
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case UPDATE_MESSAGE:
      state.newMessageText = action.newMessage
      return state
    default:
      return state
  }
}

export const sendMessageAction = () => ({
  type: SEND_MESSAGE
})

export const updateMessageAction = (message) => ({
  type: UPDATE_MESSAGE,
  newMessage: message
})

export default messageReducer
