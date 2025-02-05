// Data structure
const products = {
    1: { name: 'Laptop', price: 45000, gstRate: 18 },
    2: { name: 'Mouse', price: 999, gstRate: 12 },
    3: { name: 'Keyboard', price: 1499, gstRate: 12 },
    4: { name: 'Headphones', price: 2499, gstRate: 18 },
    5: { name: 'Monitor', price: 15999, gstRate: 18 }
};

let items = [];
let invoiceNumber = generateInvoiceNumber();

// Core functions
function generateInvoiceNumber() {
    return `INV-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
}

function calculateGST(price, rate, quantity) {
    return (price * rate / 100) * quantity;
}

// Form handling
function addItem() {
    try {
        const productSelect = document.getElementById('product');
        const quantity = document.getElementById('quantity');
        const customerName = document.getElementById('customerName');
        const customerPhone = document.getElementById('customerPhone');

        if (!validateForm(customerName, customerPhone, productSelect, quantity)) return;

        const product = products[productSelect.value];
        const qty = parseInt(quantity.value);
        const gstAmount = calculateGST(product.price, product.gstRate, qty);
        const total = (product.price * qty) + gstAmount;

        items.push({
            product: product.name,
            quantity: qty,
            price: product.price,
            gst: gstAmount,
            total: total
        });

        updateInvoice();
        resetForm();
    } catch (error) {
        console.error('Error adding item:', error);
        alert('Error adding item. Please try again.');
    }
}

function validateForm(customerName, customerPhone, productSelect, quantity) {
    if (!customerName.value.trim()) {
        alert('Please enter customer name');
        return false;
    }
    if (!customerPhone.value.trim()) {
        alert('Please enter customer phone');
        return false;
    }
    if (!productSelect.value) {
        alert('Please select a product');
        return false;
    }
    if (quantity.value <= 0) {
        alert('Please enter valid quantity');
        return false;
    }
    return true;
}

// Invoice management
function updateInvoice() {
    const tbody = document.getElementById('invoice-body');
    const subTotal = document.getElementById('subtotal');
    const gstTotal = document.getElementById('gst-total');
    const grandTotal = document.getElementById('grand-total');
    
    // Update customer details
    document.getElementById('display-customer-name').textContent = 
        document.getElementById('customerName').value;
    document.getElementById('display-customer-phone').textContent = 
        document.getElementById('customerPhone').value;

    tbody.innerHTML = '';
    let totalAmount = 0;
    let totalGst = 0;
    let subTotalAmount = 0;

    items.forEach((item, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>₹${item.gst.toFixed(2)}</td>
            <td>₹${item.total.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})" class="remove-btn">×</button></td>
        `;
        
        subTotalAmount += (item.price * item.quantity);
        totalGst += item.gst;
        totalAmount += item.total;
    });

    subTotal.textContent = `₹${subTotalAmount.toFixed(2)}`;
    gstTotal.textContent = `₹${totalGst.toFixed(2)}`;
    grandTotal.textContent = `₹${totalAmount.toFixed(2)}`;
}

function removeItem(index) {
    items.splice(index, 1);
    updateInvoice();
}

function resetForm() {
    document.getElementById('product').value = '';
    document.getElementById('quantity').value = '1';
}

function printInvoice() {
    window.print();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('invoice-date').textContent = new Date().toLocaleDateString();
});