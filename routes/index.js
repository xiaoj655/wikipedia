var express = require('express')
var router = express.Router()
const { createProxyMiddleware } = require('http-proxy-middleware')

const proxyMiddleware = createProxyMiddleware({
  target: 'https://zh.wikipedia.org/',
  changeOrigin: true,
})

/* GET home page. */
router.get('/', proxyMiddleware)

module.exports = router
