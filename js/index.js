var $ = require('jquery')
window.jQuery = $

require('../bower_components/typed.js')

$('.title > a').typed({
  strings: [ "Hi.^700 I'm @benjaminparnell.",
             '^700 I like open source things.^700',
             'And typing.^700 Typing a lot.^700',
             '@benjaminparnell'
           ],
  typeSpeed: 50
})

