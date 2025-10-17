const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Laptop', price: 60000 },
  { id: 2, name: 'Mouse', price: 1000 }
];

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

module.exports = router;
