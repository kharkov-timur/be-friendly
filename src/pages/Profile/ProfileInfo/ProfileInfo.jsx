import React, {Fragment} from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../components/common/Preloader/Preloader'
import userPhoto from '../../../assets/images/Raster.jpg'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

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
            src={props.profile.photos.small !== null
              ? props.profile.photos.small
              : userPhoto}
            alt="avatar"
          />
        </div>

        <div>
          <div className={classes.profile_status}>
            <h3>{props.profile.fullName}</h3>
            <ProfileStatus props={props}/>
          </div>
          <div className={classes.description}>
            <div>
              About me: <span>{props.profile.aboutMe}</span>
            </div>
            <div>
              Job status:
              <span>
                {props.profile.lookingForAJob ? ' :-)' : ' :-('}
              </span>
              <br />
              <span>
                {props.profile.lookingForAJobDescription}
              </span>

            </div>
            <div>
              Date of birth:
              <span>{!props.profile.birthDay
                ? props.profile.birthDay
                : ''}
              </span>
            </div>
            <div>
              City: <span>Minsk</span>
            </div>
            <div>
              Education: <span>BSU'11</span>
            </div>
            <div>
              Web Site: <span>{!props.profile.contacts.website}</span>
            </div>
            <div>
              Instagram: <span>{props.profile.contacts.instagram}</span>
            </div>
            <div>
              GitHub: <span>{props.profile.contacts.github}</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfileInfo
