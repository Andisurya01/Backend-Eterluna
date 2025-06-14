require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = Number(process.env.DB_PORT || 55954);

const routes = require('./routes/route');
const db = require('./app/models/index.js'); // ini akan mengakses models/index.js


app.use((req, res, next) => {
  console.log('Incoming Origin:', req.headers.origin);
  console.log('Method:', req.method);
  const allowedOrigins = [
    'https://admin-eter-luna.vercel.app',
    'https://eterluna.vercel.app',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});
app.options('*', cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Cek koneksi Sequelize ke database
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Berhasil terhubung ke database.');
    app.listen(port, () => {
      console.log(`🚀 Server berjalan di port ${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ Gagal terhubung ke database:', err);
  });
