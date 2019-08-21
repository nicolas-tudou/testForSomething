<template>
  <div class="footer">
    <div
      class="footer-item"
      v-for="(item, index) in options"
      :key="index"
      @click.stop="footerClick(item)">
        <div class="footer-item-content">
          <div class="for-active">
            <div class="for-devide">
              <img class="footer-item-icon" :src="item.icon">
              <p class="footer-item-title">{{item.title}}</p>
            </div>
          </div>
        </div>
        <div
          class="pop"
          :class="item.showPop ? '' : 'pop-hide'"
          v-if="item.popContent">
          <div class="pop-container">
            <div
              class="pop-item"
              v-for="(popItem, popIndex) in item.popContent"
              :key="popIndex"
              @click="clickPopItem(popItem)"
              ><span>{{popItem.title}}</span></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'optionsFooter',
  props: {
    options: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  methods: {
    /**
     * @function 点击底部footer按钮
     * @params {Object} item 底部footer按钮对象
     */
    footerClick (item) {
      this.$emit('clickItem', item)
    },
    /**
     * @function 点击弹出的选项
     * @params {Object} item 弹出框内容对象
     */
    clickPopItem (item) {
      this.$emit('clickPopItem', item)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/styles/mixins.less';
@import './index.less';
</style>
