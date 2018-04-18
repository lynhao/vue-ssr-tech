export default {
  updateCount (state, {num1, num2}) {
    // console.log('num2=' + num2)
    // console.log('num1=' + num1)
    state.count = num1
  },
  fillTodos (state, todos) {
    state.todos = todos
  },
  doLogin (state, userInfo) {
    state.user = userInfo
  },
  addTodo (state, todo) {
    state.todos.unshift(todo)
  },
  updateTodo (state, { id, todo }) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1,
      todo
    )
  },
  deleteTodo (state, id) {
    state.todos.splice(
      state.todos.findIndex(t => t.id === id),
      1
    )
  },
  deleteAllCompleted (state) {
    state.todos = state.todos.filter(t => !t.completed)
  },
  startLoading (state) {
    state.loading = true
  },
  endLoading (state) {
    state.loading = false
  }
}
