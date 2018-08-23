import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: {
      required: true,
      type: String
    }
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent'
})

const componet2 = {
  extends: compoent,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    this.text = '1234'
    console.log(this.$parent.$options.name)
  }
}

// const CompVue = Vue.extend(compoent)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: '123'
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  mounted () {
    console.log(this.$parent.$options.name)
    console.log(this.$options.props)
    this.propOne = '心智'
  },
  // propsData: {
  //   propOne: this.newPro
  // },
  components: {
    Comp: componet2
  },
  data: {
    text: 23333,
    newPro: 'abcdefg'
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp :propOne="newPro"></comp>
    </div>
  `
})

/**
组件继承有两种写法:
第一种: 在全局中使用Vue的构造器,去创建子类 Vue.extends(options), 注意,子组件中定于的props,父组件要通过propsData去获取,而且,它只能在创建实例(new Vue({}))过程中传递
第二种: 直接声明组件的扩展, 接着在创建Vue的实例中,通过引用compoents的方式 components: {xxx:xxx}, 接着就可以在模板中引用,prop也可以在模板中传递
{
  extends: childCompnet
}
**/