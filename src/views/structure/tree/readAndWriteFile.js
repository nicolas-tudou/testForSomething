let fs = require('fs')
let path = require('path')
// let txt = fs.readFileSync(path.join(__dirname, './a.jpg'))
// console.log(txt.toString('base64'))
// fs.writeFileSync(path.join(__dirname, './a.jpg'), txt)
module.exports.readFile = function (filePath) {
  return fs.readFileSync(path.join(__dirname, filePath))
}

module.exports.writeFile = function (buffer, filePath) {
  fs.writeFileSync(path.join(__dirname, filePath), buffer)
}