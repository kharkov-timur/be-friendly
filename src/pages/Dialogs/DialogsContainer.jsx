import {
  sendMessageAction,
  updateMessageAction
} from '../../redux/messageReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagesPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
