const orderModel = require('./orderModel')

// Get all orders (ADMIN only)
exports.getOrders = async (req, res) => {
  try {
    // MongoDB query
    const orders = await orderModel.find({}).exec()

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
    const order = await orderModel.findById(req.params.id).exec()

    // If 'order' is undefined, return not found
    if (!order) {
      res.status(404).json({
        error: 'Could not find the order!'
      })
    } else {
      res.status(200).json(order)
    }
  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}

// TODO
// Create an order for a specific product "Buy it now"
exports.createInstantOrder = async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json({
      error: err
    })
  }
}
