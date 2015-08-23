var express = require('express')
var bunyan = require('bunyan')
var logger = bunyan.createLogger({ name: 'site' })
var app = express()
var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))

app.listen(port, function () {
  logger.info('benparnell.com started on', port)
})
