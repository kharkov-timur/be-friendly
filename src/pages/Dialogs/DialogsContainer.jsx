import {
  sendMessageAction,
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
    sendMessage: (newMessageText) => {
      dispatch(sendMessageAction(newMessageText))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
