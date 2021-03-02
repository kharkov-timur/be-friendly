import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsers
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../../components/common/Preloader/Preloader'
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (currentPage) => {
    this.props.getUsers(currentPage, this.props.pageSize)
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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  toggleIsFollowingProgress,
  setCurrentPage,
  getUsers
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer)

