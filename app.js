const express = require('express')
const controllers = require('./controllers/index');
// const bodyParser = require('body-parser')

// setup
const app = express()

// config middleware

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// config controllers
app.use('/', controllers.home)
app.use('/customers', controllers.customer)

// error handling
app.use((err, req, res, next) => {
  if (err) {
    // console.log(err)
  }
  next()
})

// logging
app.use('*', (req, res, next) => {
  console.log(req.method, req.baseUrl, res.statusCode, res.statusMessage)
})

const PORT = 3000

app.listen(PORT, function() {
  console.log(`app is listening on port: ${PORT}`)
})
