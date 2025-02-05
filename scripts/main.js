document.getElementById('invoice-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const gstRate = document.getElementById('gst-rate').value;

    const totalPrice = quantity * price;
    const gstAmount = (totalPrice * gstRate) / 100;
    const finalPrice = totalPrice + gstAmount;

    const invoiceDetails = `
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Product Name:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Price per unit:</strong> ₹${price}</p>
        <p><strong>GST Rate:</strong> ${gstRate}%</p>
        <p><strong>Total Price:</strong> ₹${totalPrice}</p>
        <p><strong>GST Amount:</strong> ₹${gstAmount}</p>
        <p><strong>Final Price (Including GST):</strong> ₹${finalPrice}</p>
    `;
    
    document.getElementById('invoice-details').innerHTML = invoiceDetails;
});
