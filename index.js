require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = Number(process.env.DB_PORT || 55954);

const routes = require('./routes/route');
const db = require('./app/models/index.js'); // ini akan mengakses models/index.js

app.use(cors({
  AccessControlAllowOrigin: [
    'https://admin-eter-luna.vercel.app',
    'https://admineterluna-production.up.railway.app/',
    'https://eterluna-production.up.railway.app/about',
    'https://eterluna.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
  ],
  origin: [
    'https://admin-eter-luna.vercel.app',
    'https://eterluna.vercel.app',
    'https://admineterluna-production.up.railway.app/',
    'https://eterluna-production.up.railway.app/about',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:5174',
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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
