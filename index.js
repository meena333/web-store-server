const express = require('express')
const bodyParser = require('body-parser')
const itemRouter = require('./router')

const app = express()
const middleware = bodyParser.json()
const port = process.env.PORT || 4000

app.use(middleware)
app.use(itemRouter)

app.listen(port, console.log('Listening on port: ', port))