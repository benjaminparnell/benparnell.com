var $ = require('jquery')
window.jQuery = $

require('../bower_components/typed.js')

$('.title > a').typed({
  strings: [ 'Hi.^700 I\'m @benjaminparnell.',
             '^700 I like open source things.^700',
             'And typing.^700 Typing a lot.^700',
             'I make things with <span class="node">Node.js</span>,^200 <span class="elixir">Elixir</span> ^200and <span class="ruby">Ruby</span>.^700',
             '@benjaminparnell'
           ],
  typeSpeed: 50
})

