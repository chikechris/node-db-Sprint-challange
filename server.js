const express = require('express')

const server = express()

server.use(express.json())

server.use('/', (req, res) => {
  res.send(`<h2>Api Home Sprint</h2>`)
})

module.exports = server