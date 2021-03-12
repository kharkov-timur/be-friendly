import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {DialogsReduxForm} from './DialogsForm'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  let state = props.messagePage

  let dialogsElement = state.dialogs
    .map(dialog => {
      return (
        <DialogItem
          key={dialog.id}
          name={dialog.name}
          id={dialog.id}
        />
      )
    })

  let messagesElement = state.messages
    .map(message => {
        return (
          <Message
            key={message.id}
            id={message.id}
            name={message.name}
            message={message.message}
            src={message.src}
          />
        )
      }
    )

  const addNewMessage = (values) => {
    props.sendMessage(values.message)
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
          <DialogsReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
