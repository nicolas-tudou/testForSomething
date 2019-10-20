module.exports = {
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
