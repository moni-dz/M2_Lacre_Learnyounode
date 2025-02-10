const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (e, d) => {
  if (!e) {
    console.log(d.split(/\n/).length - 1)
  }
})
