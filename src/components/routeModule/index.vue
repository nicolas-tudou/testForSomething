<template>
  <div class="route-module">
    <div class="nav">
      <template v-for="(route, index) in routeList">
        <router-link tag="span" :key="index" :to="{ name: route.routeName }">{{route.routeText}}</router-link>
      </template>
    </div>
    <router-view class="route-content" />
  </div>
</template>

<script>
export default {
  name: 'routeModule',
  props: {
    routeList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.route-module {
  display: flex;
  flex-direction: column;
  height: 100%;
  .nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 46px;
    padding: 0 15px;
    background: #7109aa;
    color: #fff;
    span {
      margin-right: 15px;
      cursor: pointer;
    }
  }
  .route-content {
    flex-grow: 1;
  }
}
</style>
