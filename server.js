const express = require('express')
const taskRoute = require('./routes/tasksRoute.js')
const projectRoute = require('./routes/projectsRoute.js')
const resourceRoute = require('./routes/resourcesRoute.js')


const server = express()

server.use(express.json())

server.use('/api/tasks', taskRoute)

server.use('/api/projects', projectRoute)
server.use('/api/resources', resourceRoute)


server.use('/', (req, res) => {
  res.send(`<h2>API Home Sprint</h2>`)
})

module.exports = server


