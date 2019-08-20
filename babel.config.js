module.exports = {
  plugins: [
    ['import', {
      libraryName: 'fs-ui',
      libraryDirectory: 'lib',
      style: true // 设置true,引入组件样式
    }, 'fs-ui']
  ],
  presets: [
    ['@vue/app', {
      useBuiltIns: 'usage',
      polyfills: [
        'es6.object.assign',
        'es6.array.from'
      ]
    }]
  ]
}
