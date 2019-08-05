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
  </div>
</template>

<script>
import '@/assets/styles/reset.css'
import { test, testThrottle, testDebounce } from '@/api/v1/mockey'
import LoadingBar from '@/components/global/LoadingBar'

export default {
  name: 'app',
  components: {
    LoadingBar
  },
  methods: {
    call: () => test(),
    callThrottle: testThrottle(),
    callDebounce: testDebounce(),
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
