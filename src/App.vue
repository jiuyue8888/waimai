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
  *{
    padding: 0;
    margin: 0;
  }
  body{
    padding: 0;
    margin: 0;
    font-size: 0.28rem;
  }
  img{
    max-width: 100%;
    vertical-align: top;
  }
  .van-card{
    background: transparent;
  }
  .van-tabs__line{
    background: #2b7ff1;
  }
  .van-pull-refresh__track,
  .van-swipe__track{
    height: auto!important;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background: #f8f8f8;
}
</style>
