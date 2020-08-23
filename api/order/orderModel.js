const mongoose = require('mongoose')

const buyerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true }
})

const orderItemSchema = mongoose.Schema({
  quantity: { type: Number, default: 1 },
  color: { type: String, default: 'Black' },
  itemTotalPrice: { type: Number, required: true }
})

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  buyer: { type: buyerSchema, required: true },
  orderItems: [{ type: orderItemSchema }],
  ordered: { type: Date, default: new Date() },
  totalPrice: { type: Number, required: true }
})

module.exports = mongoose.model('Order', orderSchema)
