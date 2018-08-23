import Vue from 'vue'

const app = new Vue({
  // el: '#app',
  template: '<div>{{text}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newV, oldV) {
  //     console.log(newV, oldV)
  //   }
  // }
})
app.$mount('#root')

// let i = 0
setInterval(() => {
  // i++
  app.text += 1
  // app.$options.data.text += 1 // no work
  // app.$data.text += 1 // work
  // app.obj.a = i
  // app.$forceUpdate()
  // app.$set(app.obj, 'a', i)
  // app.$delete(app.obj, 'a')
  // console.log('Text', app.text)
}, 1000)

// 等下一次渲染才会执行
app.$options.render = (h) => {
  return h('div', {}, 'time to render')
}

console.log(app.$children)
console.log(app.$scopedSlots)
console.log(app.$slots)
console.log(app.$isServer)

// app.$watch('text', function (newV, oldV) {
//   console.log(newV, oldV)
// })

// const unWatch = app.$watch('text', (newW, oldW) => {
//   console.log(`${newW} : ${oldW}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 3000)

// app.$on('test', () => {
//   console.log('test on')
// })
// app.$emit('test')

app.$once('test', (...a) => {
  console.log('emit....' + a)
})

setInterval(() => {
  app.$emit('test', 1, 2, 3)
}, 1000)

// app.$forceUpdate()
