const express = require('express')
const tasksDb = require('./tasksModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  tasksDb
    .getTasks()
    .then(resps => {
      const newResps = resps.map(resp => {
        if (resp.completed === null || resp.completed === 0) {
          return { ...resp, completed: false }
        } else {
          return { ...resp, completed: true }
        }
      })

      res.status(200).json(newResps)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/:id', (req, res) => {
  tasksDb
    .getTasksByProjectId(req.params.id)
    .then(resps => {
      const newResps = resps.map(resp => {
        if (resp.completed === null || resp.completed === 0) {
          return { ...resp, completed: false }
        } else {
          return { ...resp, completed: true }
        }
      })

      res.status(200).json(newResps)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.post('/:id', (req, res) => {
  const taskPost = req.body
  taskPost.project_id = req.params.id
  console.log(taskPost)
  tasksDb
    .postTask(taskPost)
    .then(resps => {
      res.status(200).json(resps)
    })
    .then(error => {
      res.status(500).json(error)
    })
})

module.exports = router
