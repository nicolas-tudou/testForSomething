<template>
  <div class="test">
    <route-module :routeList="testRoutes" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      testRoutes: [
        {
          routeName: 'fixedTest',
          routeText: 'fixed 测试'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  display: flex;
  flex-direction: column;
}
</style>
