const express = require('express')
const taskRoute = require('./routes/tasksRoute.js')

const server = express()

server.use(express.json())

server.use('/api/tasks', taskRoute)

server.use('/', (req, res) => {
  res.send(`<h2>API Home Sprint</h2>`)
})

module.exports = server

