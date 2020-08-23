const mongoose = require('mongoose')
const Product = require('../product/productModel')
const Order = require('./orderModel')

// Get all orders (ADMIN only)
exports.getOrders = async (req, res) => {
  try {
    // MongoDB query
    const orders = await Order.find({}).exec()

    // If 'orders' is empty, return not found
    if (!orders) {
      res.status(404).json({
        error: 'Could not find any orders!'
      })
    } else {
      res.status(200).json(orders)
    }
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

// Get one order by id (ADMIN only)
exports.getOrderById = async (req, res) => {
  try {
    // MongoDB query
    const order = await Order.findById(req.params.id).exec()

    // If 'order' is undefined, return not found
    if (!order) {
      res.status(404).json({
        success: false,
        error: 'Could not find the order!'
      })
    } else {
      res.status(200).json(order)
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  }
}

// Create a new order & save it to Mongo
exports.createOrder = async (req, res) => {
  try {
    const currentOrderItems = req.body.orderItems
    const currentProduct = await Product.findById(req.body.product).exec()

    // If 'Product' is undefined, return not found
    if (!currentProduct) {
      res.status(404).json({
        success: false,
        error: 'Could not find the product you requested! Please refresh and try again!'
      })
    }

    // get the price of each individual item in the "cart" & set the sum of them
    let sumOfItemPrices = 0
    currentOrderItems.forEach((item) => {
      item.itemTotalPrice = (item.quantity * currentProduct.price)
      sumOfItemPrices += item.itemTotalPrice
    })

    // Create a new Mongo document from the Order model
    const newOrder = new Order({
      _id: new mongoose.Types.ObjectId(),
      product: currentProduct,
      buyer: req.body.buyer,
      orderItems: currentOrderItems,
      totalPrice: sumOfItemPrices
    })
    // save the newOrder document to MondoDB
    await newOrder.save()

    // send a success response
    res.status(200).json({
      success: true,
      message: 'Your order was placed successfully!'
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err
    })
  }
}
