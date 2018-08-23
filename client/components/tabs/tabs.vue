<script>
  import TabContainer from './tab-container.vue'
  export default {
    name: 'Tabs',
    // provide () {
    //   return {
    //     value: this.value
    //   }
    // },
    components: {
      TabContainer
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      }
    },
    data () {
      return {
        panes: []
      }
    },
    render () {
      // const contents = this.panes.map(pane => {
      //   return pane.active ? pane.$slots.default : null
      // })
      return (
        <div class="tabs">
          <ul class="tabs-header">
            {this.$slots.default}
          </ul>
        </div>
      )
    },
    methods: {
      onChange (index) {
        this.$emit('change', index)
      }
    }
  }
</script>
