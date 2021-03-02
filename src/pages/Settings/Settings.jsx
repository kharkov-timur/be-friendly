import classes from './Settings.module.css'
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';

const Settings = (props) => {
  return (
    <div className={classes.content}>
      Settings
    </div>
  )
}

export default compose(
  withAuthRedirect
)(Settings)
