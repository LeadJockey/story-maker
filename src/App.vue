<template>
  <div id="app">
    <h1>app</h1>
    <router-view></router-view>
    <hr />
    <button @click="click1('key1')">call api 1</button>
    <hr />
  </div>
</template>

<script>
import '@/assets/styles/reset.css'
import { _ } from 'vue-underscore'
import { getTestData } from '@/api/v1/mockey'

export default {
  name: 'App',
  methods: {
    // click1: getTestData(() => console.log('s'), () => console.log('f'))
    click1: getTestData()
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
  margin-top: 60px;
}
</style>
