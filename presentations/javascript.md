title: The future is javascript
author:
  name: Benjamin Parnell
  twitter: benjaminparnell
  url: http://benparnell.com
output: ../public/presentations/javascript.html

--

# The future is javascript
## By Benjamin Parnell

--

# Well...not really...

--

# The history of the greatest turd in the world

--

<img src="http://www.techweekeurope.co.uk/wp-content/uploads/2012/07/brendan-eich-mozilla-firefox-square.jpg" width="75%" height="75%">

--

> JavaScript, not to be confused with Java, was created in 10 days in May 1995 by
Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not
always known as JavaScript: the original name was Mocha, a name chosen by Marc
Andreessen, founder of Netscape.

--

### Between '95 and '07...nothing happens

* With the exception of jQuery in '06.
* Chrome (and its V8 js runtime) comes out in '08.
* Ryan Dahl (our lord and saviour) began working on Node.js in 2009.

[Here is a link to the original node.js presentation (48 mins
long)](https://www.youtube.com/watch?v=ztspvPYybIY)

All of that mostly brings us to today.

--

# JavaScript has some problems.
## Can anyone think of any?

--

### ES6 (ES2015)

```javascript
// Inheritance
class Parent {}

class Child extends Parent {
  constructor () {
    super()
    this.variable = 'thing'
  }
}

// Arrow functions
var square = (n) => n * n

// Default, rest and spread params
function f1 (x = 12) {
  return x //=> 12
}

function f2 (...x) {
  return x.length
}

f2([ 1, 2 ]) //=> 2
```

And much more! Check out the full list of features
[here](https://babeljs.io/docs/learn-es2015/).

--

### Compile to JS languages

* TypeScript

```javascript
function greeter(person: string) {
  console.log('Hello,', person)
}

greeter("Ben")
```

* Coffeescript

```javascript
greeter = (person) -> console.log('Hello,', person)

greeter "Ben"
```

There are lots more, notably [Dart](https://www.dartlang.org/) and
[ClojureScript](https://github.com/clojure/clojurescript).

--

# Node.js
What else can we do when we mix in Node?

--

## HTTP Server

```javascript
var http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'plain-text' })
  res.end('Hello world')
}).listen(8080)
```

## FS operations

```javascript
var fs = require('fs')
var request = require('request')
var writeStream = fs.createWriteStream('./test.out')

request('http://somejsonurl.com')
  .pipe(writeStream)
```

## Child processes

```javascript
var spwan = require('child_process').spawn
var cmd = spawn('cat', [ 'file.md' ], { cwd: process.cwd() })

cmd.stdout.pipe(process.stdout)
```

--
# [npm](http://npmjs.org/)
## A module ecosystem that makes the possibilities nearly endless.
--
# Lets take a look at an example problem.
--
I want to use the twitter streaming API to get all the tweets containing a
certain word/hashtag.

## We need...
* Something to interact with the twitter streaming API.
* Some twitter api credentials.

It would be easier to not write this ourselves right?
--
# Lets write it, with some help from npm.
--
## In conclusion

* There are **some** good things about javascript.
* It is getting better all the time.
* Node has pushed javascript into the stratosphere.
* Very low barrier to entry.
