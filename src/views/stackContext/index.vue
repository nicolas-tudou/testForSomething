<template>
  <div class="stack-context">
    <div class="test test-1">
      <img src="../../assets/images/qiaoba.jpg">
    </div>
    <div class="test test-2">
      <img src="../../assets/images/lufei.jpg" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.stack-context {
  height: 600px;
  background: #ff9200;
  img {
    width: 100px;
  }
  .test-1 {
    // position: absolute;
    // position: relative;
    // transform: scale(1);
    opacity: 0.9;
  }
  .test-2 {
    img {
      margin-top: -50px;
      margin-left: 20px;
    }
  }
}
</style>