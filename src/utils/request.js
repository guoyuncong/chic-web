import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

// 创建一个拥有通用配置的 axios 实例
const service = axios.create({
  // url = base url + request url
  baseURL: 'api', 
  timeout: 50000 // request timeout
})

// 响应拦截器
service.interceptors.response.use(
  // 如果我们想要获取 Http 信息，如 headers、status：response => response
  // 通过不同的返回码，确定业务处理逻辑
  response => {
    const res = response.data
    // '00000' 代表接口返回成功，其他均为失败
    if (res.code !== '00000') {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
