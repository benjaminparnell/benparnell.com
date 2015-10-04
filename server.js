var express = require('express')
var bunyan = require('bunyan')
var morgan = require('morgan')
var logger = bunyan.createLogger({ name: 'site' })
var app = express()
var port = process.env.PORT || 8080

app.use(morgan('dev'
  , { stream:
      { write: function (data) {
          logger.info((data + '').trim())          
        }
      }
    }))
app.use(express.static(__dirname + '/public'))

app.listen(port, function () {
  logger.info('benparnell.com started on', port)
})
