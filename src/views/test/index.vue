<template>
  <route-module :routeList="testRoutes" />
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
        },
        {
          routeName: 'focusTest',
          routeText: 'focus 测试'
        },
        {
          routeName: 'stackContext',
          routeText: 'stackContext 测试'
        },
        {
          routeName: 'zindexTest',
          routeText: 'zindexTest 测试'
        },
        {
          routeName: 'cssTest',
          routeText: 'cssTest 测试'
        },
        {
          routeName: 'sortTest',
          routeText: 'sort 测试'
        }
      ]
    }
  }
}
</script>
