import Post from './Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className={classes.my_posts}>
      <h3>My posts</h3>

      <div className={classes.new_posts}>
        <textarea
          className={classes.news_field}
          placeholder='you news'
        />
        <button className={classes.button_send}>Send</button>
      </div>

      <Post
        src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"
        message='Hi, how are you?'
        likesCount="15"
      />

      <Post
        src="https://play-lh.googleusercontent.com/-cyXF2_vs8LjdVY74AZTDL7TTkPPZnQFEX98axY2LQtDy-r6_NbW77VAd5WRYJ9_dg"
        message="It's my first post"
        likesCount="20"
      />

    </div>
  )
}

export default MyPosts
