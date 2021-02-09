import {
  FOLLOW_STATUS,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  SET_USERS, TOGGLE_IS_FETCHING
} from './action'

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_STATUS:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: !user.followed}
          }
          return user
        })
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

export const follow = (userId) => ({
  type: FOLLOW_STATUS,
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

export default usersReducer
