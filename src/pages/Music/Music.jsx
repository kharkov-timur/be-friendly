import classes from './Music.module.css'
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'

const Music = (props) => {
  return (
    <div className={classes.content}>
      Music
    </div>
  )
}

export default compose(
  withAuthRedirect
)(Music)
