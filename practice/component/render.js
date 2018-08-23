import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  // template: `
  //   <div :style="style" class="div1">
  //     {{props1}}
  //     <slot name="headers"></slot>
  //   </div>
  // `,
  // render (createElement) {
  //   return createElement('div', {
  //     style: this.style
  //   }, [
  //     this.$slots.headers,
  //     this.props1
  //   ])
  // },
  render (createElement) {
    return createElement('div', {
      style: this.style,
      attrs: {
        class: 'div1'
      }
      // on: {
      //   click: () => { this.$emit('clickme') }
      // }
    }, [
      this.$slots.header,
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: 'abc'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
    console.log(this.$refs)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <comp-one ref="comp" @click="handleClick" :props1="value">
  //     <span ref="span" id="test-id" >{{value}}</span>
  //   </comp-one>
  // `
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   clickme: this.handleClick
        // }
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement('span', {
          ref: 'span',
          slot: 'headers',
          // domProps: {
          //   innerHTML: '<span>1234</span>'
          // },
          attrs: {
            id: 'test-id'
          }
        }, this.value)
      ]
    )
  }
})
