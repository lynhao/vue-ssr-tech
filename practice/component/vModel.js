import Vue from 'vue'

const customInput = {
  name: 'customInput',
  // props: ['value'],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: '',
    checked: {
      type: Boolean,
      default: false
    }
  },
  template: `
    <div>
      <input type="text" :value="value" @input="$emit('input', $event.target.value)">
      <input type="checkbox" :checked="checked" v-on:change="$emit('change', $event.target.checked)">
    </div>
  `
}

new Vue({
  el: '#root',
  data () {
    return {
      value: '123',
      checked: false
    }
  },
  components: {
    CustomInput: customInput
  },
  template: `
    <div>
      <custom-input :value="value" :checked="checked" @input="value = arguments[0]" @change="checked = arguments[0]"></custom-input><br/>
      <span>{{value}}   {{checked}}</span>
    </div>
  `
})
