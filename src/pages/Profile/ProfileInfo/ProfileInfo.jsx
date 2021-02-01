import React, {Fragment} from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <Fragment>
      <div className={classes.bg_image}>
        <img
          src="https://www.impel.eu/wp-content/uploads/2019/08/mediterranean-sea.jpg"
          alt="background"
        />
      </div>

      <div className={classes.user_info}>
        <div className={classes.avatar_img}>
          <img
            src="https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg"
            alt="avatar"
          />
        </div>

        <div>
          <h3>{props.nickname}</h3>
          <div className={classes.description}>
            <div>
              Date of birth: <span>{props.birthDay}</span>
            </div>
            <div>
              City: <span>Minsk</span>
            </div>
            <div>
              Education: <span>BSU'11</span>
            </div>
            <div>
              Web Site: <span>https://it-kamasutra.com</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileInfo
