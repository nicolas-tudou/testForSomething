<template>
  <div class="fixed-test">
    <div class="transform">
      <p class="transform-text">transform</p>
      <div class="fixed">
        <p class="fixed-text" tabindex="0" @focus="pFocus('inner')">fixed inner</p>
      </div>
    </div>
    <div class="fixed">
      <p class="fixed-text" tabindex="0" @focus="pFocus('outer')">fixed outer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fixedTest',
  data () {
    return {
      content: 'this is a pages for fixed test.'
    }
  },
  methods: {
    pFocus (e) {
      console.log(e, 'tabindex to focus.')
    }
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
