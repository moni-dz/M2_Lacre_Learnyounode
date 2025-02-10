const fs = require('fs')

fs.readdir(process.argv[2], (e, l) => {
  l.filter(f => f.endsWith(`.${process.argv[3]}`)).forEach(f => console.log(f))
})
