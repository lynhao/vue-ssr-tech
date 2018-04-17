import Vue from 'vue'

const app = new Vue({
  // el: '#app',
  template: '<div>{{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
})
app.$mount('#app')

// let i = 0
setInterval(() => {
  // i++
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  app.text += 1
  // app.obj.a = i
  // app.$forceUpdate()
  // app.$set(app.obj, 'a', i)
  // app.$delete(app.obj, 'a')
}, 1000)

// app.$options.render = (h) => {
//   return h('div', {}, 'time to render')
// }

// const unWatch = app.$watch('text', (newW, oldW) => {
//   console.log(`${newW} : ${oldW}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 3000)

app.$once('test', (...a) => {
  console.log('emit....' + a)
})

setInterval(() => {
  app.$emit('test', 1, 2, 3)
}, 1000)

// app.$forceUpdate()
