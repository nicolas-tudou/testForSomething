<template>
  <div class="css">
    x<img src="../../assets/images/lufei.jpg">
  </div>
</template>

<script>
export default {
  name: 'cssTest'
}
</script>

<style lang="less" scoped>
.css {
  margin-top: 100px;
  line-height: 32px;
  font-size: 16px;
  outline: 1px solid #aaa;
  img {
    height: 100px;
    margin-top: -300px;
    vertical-align: baseline;
  }
}
</style>
