const express = require('express')
const app = express()
app.get('/about', (request, response) => {
  respond.send('About Page')
})
app.get('/', (request, response) => {
  respond.send('Home Page')
})
module.exports = app
