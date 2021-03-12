import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  requestUsers
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../../components/common/Preloader/Preloader'
import {
  getCurrentPage, getFollowingProgress,
  getIsFetching,
  getPageSize,
  getUsers,
  getUsersTotalCount
} from '../../redux/usersSelectors'

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (currentPage) => {
    this.props.requestUsers(currentPage, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching
        ? <Preloader />
        : <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />}
    </>
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getUsersTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state)
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  toggleIsFollowingProgress,
  setCurrentPage,
  requestUsers
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)

