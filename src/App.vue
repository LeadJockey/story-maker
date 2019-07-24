<template>
  <div id="app">
    <loading-bar></loading-bar>
    <h1>app</h1>
    <router-view></router-view>
    <hr />
    <button @click.prevent="call">call api no wait</button>
    <hr />
    <button @click.prevent="callThrottle">call api throttle</button>
    <hr />
    <button @click.prevent="callDebounce">call api debounce</button>
    <hr />
    <!-- <Test></Test> -->
  </div>
</template>

<script>
import '@/assets/styles/reset.css'
import { test, testThrottle, testDebounce } from '@/api/v1/mockey'
import LoadingBar from '@/components/global/LoadingBar'
import Test from '@/pages/Test'


const MyAppConstants = () => {
  const pvt = {
    userIDKey: 'my-app-user-id',
    maxIterations: 20
  }
  return {
    get: name => pvt[name]
  }
}
const a = MyAppConstants()

export default {
  name: 'app',
  components: {
    LoadingBar,
    Test
  },
  methods: {
    // click1: getTestData(() => console.log('s'), () => console.log('f'))
    call: () => test(),
    callThrottle: testThrottle(),
    callDebounce: testDebounce(),
    created: function() {
      console.log(`a.get('userIDKey')`, a.get('userIDKey'))
      
      a.get('userIDKey')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
