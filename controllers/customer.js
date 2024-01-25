const router = require('express').Router()

router.use((req, res, next) => {
  // specific middleware
  next()
})

router.get('/', (req, res, next) => {
  // get all customers
  res.status(200).send('all customers data')
  next()
})

router.get('/:id', (req, res, next) => {
  res.status(200).send(`get customer has id: ${req.params.id}`)
  next()
})

router.post('/', (req, res, next) => {
  // get all customers
  console.log(req.body)
  res.status(200).send('all customers data')
  next()
})

module.exports = router
