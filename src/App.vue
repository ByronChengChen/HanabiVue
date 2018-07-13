<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import './assets/css/main.css'

export default {
  name: 'App',
  mounted() {
    // 设置rem单位比例
    document.addEventListener('DOMContentLoaded', function () {
      var deviceWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = deviceWidth / 750 + 'px'
    }, false)
    window.onresize = function () {
      var deviceWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = deviceWidth / 750 + 'px'
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
