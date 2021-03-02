import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/Raster.jpg'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={classes.user_content}>
      <h3>Users</h3>

      <div className={classes.user_current_page}>
        {pages.map(page => {
          return (
            <span
              onClick={() => props.onPageChanged(page)}
              key={page}
              className={props.currentPage === page
                ? classes.user_page + ' ' + classes.user_page_selected
                : classes.user_page
              }>
              {page}
            </span>
          )
        })}
      </div>

      {props.users.map(user => {
        return (
          <div className={classes.user_wrapper}
               key={user.id}>
            <div className={classes.user_logo}>
              <div className={classes.user_logo_wrapper}>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={classes.user_logo_img}
                    src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
                </NavLink>
              </div>

              {user.followed
                ? <button disabled={props.followingInProgress
                  .some(id => id === user.id)}
                          onClick={() => {
                            props.unfollow(user.id)
                          }}
                          className={classes.user_subscribe_status}>
                  Follow
                </button>

                : <button disabled={props.followingInProgress
                  .some(id => id === user.id)}
                          onClick={() => {
                            props.follow(user.id)
                          }}
                          className={classes.user_subscribe_status}>
                  Unfollow
                </button>}
            </div>

            <div className={classes.user_info}>
              <div className={classes.user_info_name}>
                <div className={classes.user_name}>
                  {user.name}
                </div>
                <span className={classes.user_status}>{user.status}.</span>
              </div>

              <div className={classes.user_address}>
                <div className={classes.user_country}>{'user.location.country'}</div>
                <div className={classes.user_city}>{'user.location.city'}</div>
              </div>
            </div>
          </div>
        )
      })}

      <button className={classes.user_btn_show_more}>
        Show more
      </button>
    </div>
  )
}

export default Users
