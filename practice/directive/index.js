import Vue from 'vue'

const custom = {
  name: 'customInput',
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
}

new Vue({
  el: '#root',
  template: `
    <div>
    <div v-html="value"></div>
    <input type="text" :value="value" @input="input" ref="content"/>
    <ul><li v-for="(list, key, value) in obj" :key="list">{{list}}, {{key}}, {{value}}</li></ul>
    <custom v-model="value"></custom>
    </div>
    `,
  components: {
    Custom: custom
  },
  data: {
    text: 0,
    active: false,
    html: '<span>123</span>',
    obj: {
      a: 'a',
      b: 'b'
    }
  },
  props: {
    value: {
      type: String,
      default: '123'
    }
  },
  methods: {
    input () {
      console.log(this.$refs.content.value)
      this.$emit('input', this.$refs.content.value)
    }
  }
})
