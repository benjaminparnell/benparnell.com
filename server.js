var http = require('http')

http.createServer(function (req, res) {
  res.writeHead(418, { 'Content-Type': 'text/plain' })
  res.end('I\'m a teapot\n')
}).listen(process.env.PORT || 1337)
