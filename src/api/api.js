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
      .then(res => res.data)
      .catch(e => {
        console.log(e)
      });
  }
}

export const authUser = () => {
  return instance
    .get(`auth/me`)
    .then(res => res.data)
    .catch(e => {
      console.log(e)
    });
}

export const userFollow = (userId) => {
  return instance
    .post(`follow/${userId}`)
    .then(res => {
      return res.data
    })
    .catch(e => {
      console.log(e)
    });
}

export const userUnfollow = (userId) => {
  return instance
    .delete(`follow/${userId}`)
    .then(res => {
      return res.data
    })
    .catch(e => {
      console.log(e)
    });
}

