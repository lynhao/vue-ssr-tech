import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      {{isActive ? 'active' : 'not-active'}}
      <p v-html="html"></p>
    </div>
   `,
  data: {
    isActive: false,
    html: `<span>span</span>`
  }
})
