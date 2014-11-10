// MODULE DEPENDENCIES

var express = require('express')
var stylus = require('stylus')
var nib = require('nib')

// TELL TO USE JADE AND STYLUS AND OTHERS

var app = express()
function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .use(nib())
}

// TELL EXPRESS TO USE JADE
// AND WHERE TO KEEP VIEWS

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// PASS MIDDLEWARE FUNCTIONS FOR EXPRESS TO USE.

app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

// Creating route

app.get('/', function (req, res) {
  res.end('Hi there!')
})
app.listen(3000)
