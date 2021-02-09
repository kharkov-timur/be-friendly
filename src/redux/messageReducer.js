import {SEND_MESSAGE, UPDATE_MESSAGE} from './action'

let initialState = {
  dialogs: [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Dmitri'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Victor'},
  ],
  messages: [
    {
      id: 1,
      message: 'Hi, how are you?',
      src: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
      likeCount: 15,
    },
    {
      id: 2,
      message: 'Hi, how are you?',
      src: 'https://play-lh.googleusercontent.com/-cyXF2_vs8LjdVY74AZTDL7TTkPPZnQFEX98axY2LQtDy-r6_NbW77VAd5WRYJ9_dg',
      likeCount: 20,
    },
    {
      id: 3,
      message: 'Hi, how are you?',
      src: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
      likeCount: 10,
    },
    {
      id: 4,
      message: 'Hi, how are you?',
      src: 'https://play-lh.googleusercontent.com/-cyXF2_vs8LjdVY74AZTDL7TTkPPZnQFEX98axY2LQtDy-r6_NbW77VAd5WRYJ9_dg',
      likeCount: 25,
    },
  ],
  newMessageText: ''
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
        src: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
        likeCount: 0,
      }

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      }
    case UPDATE_MESSAGE:
      return {
        ...state,
        newMessageText: action.newMessage
      }
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
