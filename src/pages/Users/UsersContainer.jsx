import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  follow,
  unfollow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  toggleIsFollowingProgress
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../../components/common/Preloader/Preloader'
import {usersAPI} from '../../api/api'

class UsersContainer extends Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount)
      })
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    this.props.toggleIsFetching(true)

    usersAPI.getUsers(currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      }).catch(e => {
      console.log(e)
    })
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
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
    followingInProgress: state.usersPage.followingInProgress
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  toggleIsFollowingProgress,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
