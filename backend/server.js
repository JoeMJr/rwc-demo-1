const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;


// 1. Required for Codespaces
app.set('trust proxy', 1);

// 2. CORS – allow frontend Codespace origin
app.use(cors({
  origin: 'https://humble-pancake-96rw47q64gwc7vpj-5500.app.github.dev', // frontend port!
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

// 3. Handle preflight requests
app.options('*', cors());

// 4. Routes
app.use('/api', routes);

// Use absolute path for static files
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});