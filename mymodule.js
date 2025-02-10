const fs = require('fs')
const path = require('path')

module.exports = (d, ext, callback) => {
  fs.readdir(d, (err, l) => {
    if (err) return callback(err)
    l = l.filter(f => path.extname(f) === `.${ext}`)
    callback(null, l)
  })
}
