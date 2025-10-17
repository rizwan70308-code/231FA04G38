const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Create server
const server = http.createServer(app);

// Log each request
server.on('request', (req, res) => {
  console.log(`${req.method} ${req.url}`);
});

// Routes
app.use('/products', productRoutes);

// Show system info
console.log('------------------------------');
console.log('System Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);
console.log('Architecture:', os.arch());
console.log('------------------------------');

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
