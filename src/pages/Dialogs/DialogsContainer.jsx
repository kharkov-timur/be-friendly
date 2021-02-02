import React from 'react'
import {
  sendMessageAction,
  updateMessageAction
} from '../../redux/messageReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().messagesPage
        let sendMessage = () => {
          store.dispatch(sendMessageAction())
        }
        let onMessageChange = (message) => {
          store.dispatch(updateMessageAction(message))
        }

        return (
          <Dialogs
            updateNewMessageBody={onMessageChange}
            sendMessage={sendMessage}
            messagePage={state}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
