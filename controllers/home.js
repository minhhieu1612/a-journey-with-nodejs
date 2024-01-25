const router = require('express').Router()
const fs = require('fs');

router.get('/', function(req, res, next) {
  // res.send('test')
  // try {
  //   throw new Error("test error")
  // } catch (error) {
  //   next(error)
  // }
  // fs.readFile('C:\\Users\\hieupc\\Downloads\\learn-node\\Sources\\First-atempt\\package.json', (err, data) => {
  //   if (err) {
  //     res.status(500)
  //     next(err) // Pass errors to Express.
  //   } else {
  //     res.status(200).send(data)
  //     next()
  //   }
  // })

  new Promise((resolve, reject) => {
    setTimeout(() =>
    {
      try {
        
        throw new Error("async error")
      } catch (error) {
        reject(error)
      }
    }, 1000)
  })
  .then((data, err) => {
    console.log(`data: ${data}`)
    console.log(`err: ${err}`)
  })
  .catch((err) => {
    console.error(err)
  }).finally(() => {
    next()
  })
})

module.exports = router