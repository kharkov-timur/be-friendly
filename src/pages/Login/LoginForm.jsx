import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input} from '../../components/common/FormsControls/FormsControls'
import {required} from '../../utils/validators'

import classes from '../../components/common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='email'
               component={Input}
               type='text'
               placeholder='login'
               validate={[required]}
        />
      </div>
      <div>
        <Field name='password'
               component={Input}
               type='password'
               placeholder='password'
               validate={[required]}
        />
      </div>
      <div>
        <Field name='rememberMe'
               component={Input}
               type='checkbox'
               placeholder='remember me' />
      </div>
      {
        props.error && <div className={classes.formSummaryError}>{props.error}</div>
      }
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)
