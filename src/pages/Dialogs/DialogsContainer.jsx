import {
  sendMessageAction,
  updateMessageAction
} from '../../redux/messageReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (message) => {
      dispatch(updateMessageAction(message))
    },
    sendMessage: () => {
      dispatch(sendMessageAction())
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
