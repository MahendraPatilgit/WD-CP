const express = require('express');
const router = express.Router();

router.post('/generateInvoice', (req, res) => {
    const { customerName, product, quantity, price, gstRate } = req.body;
    const totalPrice = quantity * price;
    const gstAmount = (totalPrice * gstRate) / 100;
    const finalPrice = totalPrice + gstAmount;

    res.json({
        customerName,
        product,
        quantity,
        price,
        gstRate,
        totalPrice,
        gstAmount,
        finalPrice
    });
});

module.exports = router;
