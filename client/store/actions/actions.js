import model from 'model'
import notify from '../../components/notification/function'
import bus from '../../util/bus'

const handleError = (err) => {
  if (err.code === 401) {
    notify({
      content: '请先登录~'
    })
    bus.$emit('auth')
  } else if (err.code === 400) {
    notify({
      content: err.message
    })
  }
}
export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num1: data.num1
      })
    }, data.time)
  },
  fetchTodos ({ commit }) {
    commit('startLoading')
    return model.getAllTodos()
      .then(data => {
        commit('endLoading')
        commit('fillTodos', data)
      })
      .catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  addTodo ({ commit }, todo) {
    commit('startLoading')
    model.createTodo(todo)
      .then(data => {
        commit('endLoading')
        commit('addTodo', data)
        notify({
          content: '你又多了一件事做'
        })
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  updateTodo ({ commit }, { id, todo }) {
    commit('startLoading')
    model.updateTodo(id, todo)
      .then(data => {
        commit('endLoading')
        commit('updateTodo', { id, todo: data })
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteTodo ({ commit }, id) {
    commit('startLoading')
    model.deleteTodo(id)
      .then(data => {
        commit('endLoading')
        commit('deleteTodo', id)
        notify({
          content: '你又少了一件事做'
        })
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  deleteAllCompleted ({ commit, state }) {
    commit('startLoading')
    const ids = state.todos.filter(t => t.completed).map(t => t.id)
    model.deleteAllCompleted(ids)
      .then(() => {
        commit('endLoading')
        commit('deleteAllCompleted')
        notify({
          content: '清空了'
        })
      }).catch(err => {
        commit('endLoading')
        handleError(err)
      })
  },
  login ({ commit }, { username, password }) {
    commit('startLoading')
    return new Promise((resolve, reject) => {
      model.login(username, password)
        .then(data => {
          commit('endLoading')
          commit('doLogin', data)
          notify({
            content: '登录成功!'
          })
          resolve()
        }).catch(err => {
          commit('endLoading')
          handleError(err)
          reject(err)
        })
    })
  }
}
