const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (e, l) => {
  if (e) return console.error('There was an error:', err)
  l.forEach(f => console.log(f))
})
