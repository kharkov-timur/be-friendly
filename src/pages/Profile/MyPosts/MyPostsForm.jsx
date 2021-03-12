import React from 'react'
import classes from './MyPosts.module.css'
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from '../../../utils/validators'
import {Textarea} from '../../../components/common/FormsControls/FormsControls'

const maxLength15 = maxLength(15)

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}
          className={classes.new_posts}>
      <Field name='post'
             component={Textarea}
             className={classes.news_field}
             placeholder='you news...'
             validate={[required, maxLength15]} />
      <button className={classes.button_send}>
        Add post
      </button>
    </form>
  )
}

export const MyPostReduxForm = reduxForm({
  form: 'post'
})(MyPostsForm)
