import Vue from 'vue'

const selfDirective = {
  focus: {
    inserted (el) {
      el.focus()
    }
  }
}

new Vue({
  el: '#root',
  template: `
     <div>
      <input type="text" v-focus>
     </div>
  `,
  directives: selfDirective
})
