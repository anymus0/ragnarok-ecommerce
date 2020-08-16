const express = require('express')
const router = express.Router()
const controller = require('./orderController')

// GET {baseURL}/api/oder/all
router.get('/all', controller.getOrders)

// GET {baseURL}/api/oder/:id
router.get(':id', controller.getOrderById)

module.exports = router
