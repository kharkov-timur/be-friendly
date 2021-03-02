import classes from './News.module.css'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'

const News = (props) => {
  return (
    <div className={classes.content}>
      News
    </div>
  )
}

export default compose(
  withAuthRedirect
)(News)
