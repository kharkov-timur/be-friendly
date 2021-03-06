import {
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  SET_USERS,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
  UNFOLLOW
} from './action'
import {usersAPI} from '../api/api'

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    case SET_USERS:
      return {...state, users: [...action.users]}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    default:
      return state
  }
}

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId
})

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId
})

export const toggleIsFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const setUsers = (users) => ({
  type: SET_USERS,
  users
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    usersAPI.getUsers(page, pageSize)
      .then(res => res.data)
      .then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
      })
      .catch(e => {
        console.log(e)
      });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.userFollow(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.userUnfollow(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
      })
  }
}

export default usersReducer
