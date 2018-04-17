export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', {
        num1: data.num1
      })
    }, data.time)
  }
}
