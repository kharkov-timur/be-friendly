import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import classes from './Dialogs.module.css'
import {sendMessageAction, updateMessageAction} from '../../redux/messageReducer';

const Dialogs = (props) => {
  let dialogsElement = props.messagePage.dialogs
    .map(dialog => {
      return (
        <DialogItem
          key={dialog.name}
          name={dialog.name}
          id={dialog.id}
        />
      )
    })

  let messagesElement = props.messagePage.messages
    .map(message => {
        return (
          <Message
            key={message.message + message.id}
            id={message.id}
            name={message.name}
            message={message.message}
            src={message.src}
          />
        )
      }
    )

  const onMessageChange = (event) => {
    let message = event.target.value
    props.dispatch(updateMessageAction(message))
  }

  const sendMessage = () => {
    props.dispatch(sendMessageAction())
  }

  return (
    <div className={classes.content}>
      <h3>{'Dialogs'.toUpperCase()}</h3>
      <div className={classes.content_wrapper}>
        <div className={classes.user_list}>
          {dialogsElement}
        </div>
        <div className={classes.dialog_list}>
          {messagesElement}
          <div className={classes.dialog_input}>
            <div className={classes.input_field}>
              <textarea
                onChange={onMessageChange}
                placeholder='new message'
                value={props.messagePage.newMessageText}
              />
            </div>
            <button
              onClick={sendMessage}
              className={classes.btn_message}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
