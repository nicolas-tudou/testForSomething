<template>
  <div class="sort" style="padding: 15px; background: #fff200;">
    请输入排序规模：<a-input v-model="sortLength" style="width: 100px;" @change="lengthChange" />
    <p class="text-overflow">源数据：[ <span v-for="(num, index) in sortData" :key="index">{{num}}<span v-if="index < sortData.length - 1">，</span></span> ]</p>
    <div class="sort-content">
      <p style="font-size: 20px; font-weight: bold;">排序结果：</p>
      <template v-for="sort in sortFunction">
        {{sort.title}}
        <div class="sort-time" :key="sort.title" style="padding: 10px 15px; border-bottom: 1px dashed #000;">
          耗时：<span>{{sort.time}}</span>
          <p class="text-overflow">结果：[ <span v-for="(num, index) in sort.result" :key="index">{{num}}<span v-if="index < sort.result.length - 1">，</span></span> ]</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { insertionSOrt, mergeSort } from './sort'
export default {
  name: 'sortTest',
  data () {
    return {
      sortData: [],
      sortLength: 10,
      sortFunction: [
        {
          title: '插入排序',
          func: insertionSOrt,
          time: 0,
          result: []
        },
        {
          title: '归并排序',
          func: mergeSort,
          time: 0,
          result: []
        }
      ]
    }
  },
  created () {
    this.lengthChange()
  },
  methods: {
    getSortData () {
      this.sortData = []
      while (this.sortData.length < this.sortLength) {
        this.sortData.push(Math.ceil(Math.random() * (this.sortLength * 100)))
      }
    },
    calculate () {
      this.sortFunction.forEach(sort => {
        let data = JSON.parse(JSON.stringify(this.sortData))
        let sTime = new Date().getTime()
        sort.result = sort.func(data)
        sort.time = new Date().getTime() - sTime
      })
    },
    lengthChange () {
      this.getSortData()
      this.calculate()
    }
  }
}
</script>
