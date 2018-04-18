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
  }
}
