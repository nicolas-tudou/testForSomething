<template>
  <div class="sort" style="padding: 15px; background: #fff200;">
    请输入排序规模：<a-input v-model="sortLength" style="width: 100px;" @change="lengthChange" />
    <button class="calculate" style="margin-left: 30px;" @click="calculate">开始排序</button>
    <!--<p class="text-overflow">源数据：[ <span v-for="(num, index) in sortData" :key="index">{{num}}<span v-if="index < sortData.length - 1">，</span></span> ]</p>-->
    <!-- <div class="sort-content">
      <p style="font-size: 20px; font-weight: bold;">排序结果：</p>
      <template v-for="sort in sortFunction">
        {{sort.title}}
        <div class="sort-time" :key="sort.title" style="padding: 10px 15px; border-bottom: 1px dashed #000;">
          耗时：<span>{{sort.time}}</span> -->
          <!--<p class="text-overflow">结果：[ <span v-for="(num, index) in sort.result" :key="index">{{num}}<span v-if="index < sort.result.length - 1">，</span></span> ]</p>-->
        <!-- </div>
      </template>
    </div> -->
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :multiple="true"
      :fileList="fileList"
      :beforeUpload="beforeUpload"
      @change="handleChange"
    >
    <a-button> <a-icon type="upload" /> Upload </a-button>
  </a-upload>
  </div>
</template>

<script>
// import { insertionSOrt, mergeSort } from './sort'
export default {
  name: 'sortTest',
  data () {
    return {
       fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png',
        }
      ],
      sortData: [],
      sortLength: 10,
      // sortFunction: [
      //   {
      //     title: '插入排序',
      //     func: insertionSOrt,
      //     time: 0,
      //     result: []
      //   },
      //   {
      //     title: '归并排序',
      //     func: mergeSort,
      //     time: 0,
      //     result: []
      //   }
      // ]
    }
  },
  created () {
    this.lengthChange()
  },
  methods: {
    beforeUpload (file, fileList) {
      return new Promise(res => {
        this.compressPic(file).then(blob => {
          console.log('blob', blob)
          res(blob)
        })
      })
    },
    compressPic (file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader()
        let image = new Image()
        console.log('file666', file)
        reader.addEventListener('load', () => {
          console.log('src', reader.result)
          image.onload = function () {
            // document.querySelector('#app').appendChild(image)
            var canvas = document.createElement('canvas')
            var context = canvas.getContext('2d')
            canvas.width = 400
            canvas.height = 300
            // 核心JS就这个
            context.drawImage(image, 0, 0, 400, 300)
            // let base64 = canvas.toDataURL()
            // console.log('压缩后', base64)
            // resolve(base64)
            //  canvas转为blob并上传
            canvas.toBlob(function (blob) {
              document.querySelector('#app').appendChild(canvas)
              console.log('压缩后', blob)
              // return blob
              resolve(blob)
            })
          }
          image.src = reader.result // 指定Image的路径
        }, false)
        if (file) {
          reader.readAsDataURL(file)
        }
      })
    },
    handleChange(info) {
      console.log(info)
      let fileList = [...info.fileList]

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      fileList = fileList.slice(-2)

      // 2. read from response and show file link
      fileList = fileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url
        }
        return file
      })
      this.fileList = fileList;
    },
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
    }
  }
}
</script>
