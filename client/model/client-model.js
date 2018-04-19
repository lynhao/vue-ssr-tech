import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: '/'
  // baseURL: process.env.VUE_ENV === 'server' ? 'http://127.0.0.1:3333' : '/'   //自己给自己发请求,  缺点是拿不到cookies, 不能判断登录
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      if (!data) {
        return reject(createError(400, 'no data'))
      }
      if (!data.success) {
        return reject(createError(400, data.message))
      }
      resolve(data.data)
    }).catch(err => {
      const resp = err.response
      // console.log(resp)
      if (resp.status === 401) {
        console.log('need auth')
        reject(createError(401, 'need auth'))
      } else if (resp.status === 400) {
        reject(createError(400, resp.data.message))
      }
    })
  })
}

export default {
  getAllTodos () {
    return handleRequest(request.get('/api/todos'))
  },
  login (username, password) {
    return handleRequest(request.post('/user/login', { username, password }))
  },
  updateTodo (id, todo) {
    return handleRequest(request.put(`/api/todo/${id}`, todo))
  },
  createTodo (todo) {
    return handleRequest(request.post('/api/todo', todo))
  },
  deleteTodo (id) {
    return handleRequest(request.delete(`/api/todo/${id}`))
  },
  deleteAllCompleted (ids) {
    return handleRequest(request.post('/api/delete/completed', { ids }))
  }
}
