import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <span>Name: {{name}}</span>
      <span>Name: {{getName()}}</span>
      <p>{{text}}</p>
      <input type="text" v-model="firstName" :style="style"/>
      <input type="text" v-model="b" :style="style"/>
      <p>{{fooName}}</p>
    </div>
  `,
  data: {
    firstName: 'lyn',
    lastName: 'hao',
    text: '',
    style: {
      outline: '1px solid green'
    },
    fooName: '',
    obj: {
      a: 123
    },
    b: 0
  },
  computed: {
    name () {
      console.log('name')
      return `${this.firstName} - ${this.lastName}`
    }
  },
  methods: {
    getName () {
      console.log('getName')
      return `${this.firstName} - ${this.lastName}`
    }
  },
  watch: {
    firstName: {
      handler (newV, oldV) {
        this.fooName = newV + '-new'
      },
      immediate: true
    }
    // b: {
    //   handler (newV, oldV) {
    //     this.b += newV
    //     console.log(this.b)
    //   }
    //   // immediate: true,
    //   // deep: true
    // }
    // 'obj.a': {
    //   handler (newV, oldV) {
    //     // this.obj.a += newV
    //   },
    //   immediate: true
    // }
  }
})
