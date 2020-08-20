<template>

  <div id="app">
    <router-view :key="$route.path" />
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background: #f8f8f8;
}
</style>
