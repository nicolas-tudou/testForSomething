<template>
  <div id="app">
    <route-module :routeList="routeList" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      routeList: [
        {
          routeName: 'home',
          routeText: '首页'
        },
        {
          routeName: 'test',
          routeText: '测试页面'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  margin: 0 auto;
  width: 80%;
  min-width: 880px;
  min-height: 100vh;
}
</style>
