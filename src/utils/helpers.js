import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL =
  'http://ec2-52-198-213-230.ap-northeast-1.compute.amazonaws.com:3000/api'
// const baseURL = 'http://3e331a904c8b.ngrok.io/api'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})
