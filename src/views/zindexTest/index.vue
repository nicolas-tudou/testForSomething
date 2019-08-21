<template>
  <div class="zindex-test">
    <a-button class="exchange-btn" type="primary" @click="exchangeZindex">{{showBug ? '修复bug' : '显示bug'}}</a-button>
    <options-footer
      :class="showBug ? 'show-bug' : 'hidden-bug'"
      :options="footerItems"
      @clickItem="footerClick"
      @clickPopItem="clickPopItem" />
  </div>
</template>

<script>
import optionsFooter from '@/components/optionsFooter'
export default {
  name: 'zindexTest',
  components: {
    optionsFooter
  },
  data () {
    return {
      showBug: false,
      footerItems: [
        {
          title: '管理分类',
          action: 'toClassifyManage'
        },
        {
          title: '商品排序',
          action: 'toFoodsSort'
        },
        {
          title: '添加商品',
          action: 'toAddFoods',
          showPop: false,
          popContent: [
            {
              title: '拍菜单录商品',
              action: 'toAutoAddFoods'
            },
            {
              title: '手动添加单品',
              action: 'toManualAddFoods'
            }
          ]
        },
        {
          title: '批量操作',
          action: 'toBetchOperate'
        }
      ]
    }
  },
  methods: {
    exchangeZindex () {
      this.showBug = !this.showBug
    },
    footerClick (e) {
      console.log('item info: ', e)
    },
    clickPopItem (e) {
      console.log('pop info: ', e)
    },
    /**
     * @function 点击操作按钮
     * @params {Object} actionItem 操作对象
     */
    footerClick (actionItem) {
      actionItem.showPop = !actionItem.showPop
      // this[actionItem.action]()
    },
    /**
     * @function 点击弹出选项
     * @params {Object} popItem 弹出项对象
     */
    clickPopItem (popItem) {
      console.log(99999)
      // this[popItem.action]()
    }
  }
}
</script>

<style lang="less" scoped>
.zindex-test {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  background: #ff9200;
  border: 1px solid #d5d5d5;
  .exchange-btn {
    width: 150px;
    margin: 100px auto;
  }
}
.hidden-bug {
  /deep/.footer-item-content {
    z-index: 1;
  }
}
</style>
