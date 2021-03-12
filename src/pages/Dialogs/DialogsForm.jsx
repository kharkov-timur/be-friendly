import React from 'react'
import classes from './Dialogs.module.css'
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../../components/common/FormsControls/FormsControls'
import {maxLength, required} from '../../utils/validators'

const maxLength100 = maxLength(100)

const DialogsForm = (props) => {
  return (
    <div className={classes.dialog_input}>
      <form onSubmit={props.handleSubmit}
            className={classes.input_field}>
        <Field name='message'
               component={Textarea}
               type='text'
               placeholder='new message'
               validate={[required, maxLength100]} />
        <button className={classes.btn_message}>
          Send message
        </button>
      </form>
    </div>
  )
}

export const DialogsReduxForm = reduxForm({
  form: 'message'
})(DialogsForm)
