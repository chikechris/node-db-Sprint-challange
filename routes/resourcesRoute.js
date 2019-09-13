const express = require('express')
const resourcesDb = require('./resourcesModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  resourcesDb
    .getResources()
    .then(resps => {
      res.status(200).json(resps)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
  resourcesDb
    .postResource(req.body)
    .then(resps => {
      res.status(200).json(resps)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router
