import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching
} from '../../redux/usersReducer'
import axios from 'axios'
import Users from './Users'
import Preloader from '../../components/common/Preloader/Preloader'

class UsersContainer extends Component {
  constructor(props) {
    super(props)
    this.url = 'https://social-network.samuraijs.com/api/1.0'
  }

  componentDidMount() {
    this.props.toggleIsFetching(true)

    axios
      .get(`${this.url}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(res.data.items)
        this.props.setTotalCount(res.data.totalCount)
      })
      .catch(e => {
        console.log(e)
        throw e
      })
  }

  onFollowChange = (userId) => {
    this.props.follow(userId)
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    this.props.toggleIsFetching(true)
    axios
      .get(`${this.url}/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(res.data.items)
      }).catch(e => {
      console.log(e)
      throw e
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
          onFollowChange={this.onFollowChange}
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
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchToProps = {
  follow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
