'use strict'

const express = require('express')
const morgan = require('morgan')
const path = require('path')

let app = express()
let port = process.env.PORT || 8080

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '/public')))

app.get('*', function (req, res) {
  res.redirect('/')
})

app.listen(port, function () {
  console.log('benparnell.com started on', port)
})
