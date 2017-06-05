const express = require('express')
const router = require('./routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
require('dotenv').config()

var app = express()

app.use(express.static(__dirname + '/client/build'))

if(process.env.NODE_ENV !== 'test') {
  app.use(morgan('tiny'))
}

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('', router)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('listening on', port)
})

module.exports = app