import {
  addPostAction,
  updatePostAction
} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAction())
    },
    updateNewPostText: (text) => {
      dispatch(updatePostAction(text))
    }
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default PostContainer
