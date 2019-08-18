<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'test' }">Test</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
#app {
  width: 100%;
  background: #f40;
}
</style>
