// Require packages
const express = require('express')

// Import MongoDB connection
const db = require('./db')
// DB log
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback () {
  console.log('MongoDB Connected...')
})

// Require API routes
const order = require('./order/orderRoute')
const product = require('./product/productRoute')
const store = require('./store/storeRoute')
const user = require('./user/userRoute')

// Create express instance
const app = express()

// Parse JSON
app.use(express.json())

// Import API Routes
app.use('/order', order)
app.use('/product', product)
app.use('/store', store)
app.use('/user', user)

// Every route that is unused will redirect to page 404
app.all(':file', (req, res) => {
  res.send('ERROR 404!').end()
})

app.all('*', (req, res) => {
  res.send('ERROR 404!').end()
})

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
