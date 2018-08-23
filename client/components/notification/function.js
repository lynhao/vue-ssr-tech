import Vue from 'vue'
import Component from './func-notification.js'

const NotificationConstructor = Vue.extend(Component)
const instances = []
let seed = 1
const removeInstance = (instance) => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst => {
    return instance.id === inst.id
  })
  instances.splice(index, 1)
  if (len <= 1) return
  console.log(instance.vm)
  const removeHeight = instance.vm.height
  console.log(removeHeight)
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
    console.log(parseInt(instances[i].verticalOffset) - removeHeight - 16)
  }
}

const notify = (options) => {
  if (Vue.prototype.$isServer) return

  const {
    autoClose,
    ...rest
  } = options

  const instance = new NotificationConstructor({
    // propsData: options,
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })
  // console.log(instance.$mount())
  const id = `notification_${seed++}`
  instance.id = id
  instance.vm = instance.$mount() // 生成$el, 出现节点
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)

  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })
  return instance.vm
}

export default notify
