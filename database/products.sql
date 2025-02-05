-- Create Products Table
CREATE TABLE products (
    id INT NOT NULL IDENTITY(1,1) PRIMARY KEY, -- Ensure AUTO_INCREMENT works for your DB
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL, -- Precision: 10 digits, 2 after decimal
    gst_rate DECIMAL(5,2) NOT NULL -- Precision: 5 digits, 2 after decimal
);

-- Insert Sample Data
INSERT INTO products (name, price, gst_rate) VALUES
('Laptop', 45000.00, 18.00),
('Mouse', 999.00, 12.00),
('Keyboard', 1499.00, 12.00),
('Headphones', 2499.00, 18.00),
('Monitor', 15999.00, 18.00);
