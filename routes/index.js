var express = require('express')
var router = express.Router()
const axios = require('axios')

/* GET home page. */
router.get('/', (req, res) => {
  console.log('abc', req.url)
})

module.exports = router
