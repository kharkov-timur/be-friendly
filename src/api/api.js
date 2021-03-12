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
    console.warn('Absolutes method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`profile/${userId}`)
  },

  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
  },

  updateStatus(status) {
    return instance
      .put(`profile/status`, {
        status
      })
  }
}

export const authAPI = {
  authUser() {
    return instance
      .get(`auth/me`)
  },

  loginUser(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, {
        email,
        password,
        rememberMe,
      })
  },

  logoutUser() {
    return instance
      .delete(`auth/login`)
  }
}
