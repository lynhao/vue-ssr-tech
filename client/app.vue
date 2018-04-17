<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}}{{counter}}</p>
   <!--  <p>{{textC}}</p>
    <p>{{textPlus}}</p>
 -->
    <todo></todo>
    <!-- <tabs>
      <tab label="text">
        <span slot="label"></span>
        <p>tab content</p>
      </tab>
    </tabs> -->
    <!-- <transition name="fade" mode="out-in">
      <router-view />
    </transition> -->
    <!-- <notification content="test notify" @close="close"></notification> -->
    <button @click="notify">123</button>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

console.log(Header.__docs)

export default {
  metaInfo: {
    title: 'lynhaw\'s Page'
  },
  components: {
    Header,
    Footer,
    Todo
  },
  methods: {
    ...mapActions([
      'updateCountAsync'
      // 'a/add',
      // 'b/textAction'
    ]),
    ...mapMutations([
      'updateCount'
      // 'a/updateText'
    ]),
    close () {
    },
    notify () {
      this.$notify({
        content: 'test notify',
        btn: 'close'
      })
    }
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.$store.commit('updateCount', {
    //     num1: i++,
    //     num2: 3
    //   })
    // }, 1000)
    // this.$store.dispatch('updateCountAsync', {
    //   num1: 5,
    //   time: 2000
    // })
    // setInterval(() => {
    //   this.updateCount({
    //     num1: i++,
    //     num2: 3
    //   })
    // }, 1000)
    // this.updateCountAsync({
    //   num1: 5,
    //   time: 2000
    // })
    // this['a/updateText']('123')
    // this['a/textPlus']('123')
    // console.log(this['a/textPlus'])
    // this['a/add']()
    // this['b/textAction']()
  },
  computed: {
    // textA () {
    //   return this.$store.state.a.text
    // },
    ...mapState({
      // 'count',
      counter: (state) => state.count
      // textA: state => state.a.text,
      // textC: state => state.c.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      fullName: 'fullName'
      // textPlus: 'a/textPlus'
    })

    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>
