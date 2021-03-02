import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'fcb1fd4d-ec34-42d9-af87-d067b90720bd'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
  },

  userFollow(userId) {
    return instance
      .post(`follow/${userId}`)
  },

  userUnfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
  },

  getProfile(userId) {
    return instance
      .get(`profile/${userId}`)
  }
}

export const authAPI = {
  authUser() {
    return instance
      .get(`auth/me`)
  }
}
