import classes from './Message.module.css'

const Message = (props) => {

  return (
    <div className={classes.message_item}>
      <div className={classes.message_user}>
        <div className={classes.message_avatar}>
          <img
            src={props.src}
            alt={`dialog avatar${props.id}`}
          />
        </div>
        <div className={classes.message_nickname}>
          {props.name}
        </div>
      </div>
      <div className={classes.message_text}>
        <div className={classes.message_text_wrapper}>
          {props.message}
        </div>
      </div>
    </div>
  )
}

export default Message
