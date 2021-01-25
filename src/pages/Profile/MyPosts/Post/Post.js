import classes from './Post.module.css'

const Post = (props) => {
  return (
      <div className={classes.posts}>
        <div className={classes.item}>
          <div className={classes.post_img}>
            <div className={classes.post_like}>
              &hearts; <span>{props.likesCount}</span>
            </div>
            <img
              src={props.src}
              alt='post'
            />
          </div>
          <div className={classes.item_text}>
            {props.message}
          </div>
        </div>
      </div>
  )
}

export default Post
