import { apiHelper } from './../utils/helpers'
const getToken = () => window.localStorage.getItem('token')

export default {
  get ({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFollowings ({ userId }) {
    return apiHelper.get(`/users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFollowers ({ userId }) {
    return apiHelper.get(`/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addFollowing ({ id }) {
    return apiHelper.post('/followships', { id })
  },

  deleteFollowing ({ userId }) {
    return apiHelper.delete(`/followships/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
