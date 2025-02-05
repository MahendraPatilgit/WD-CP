const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    customerName: String,
    product: String,
    quantity: Number,
    price: Number,
    gstRate: Number,
    totalPrice: Number,
    gstAmount: Number,
    finalPrice: Number,
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
