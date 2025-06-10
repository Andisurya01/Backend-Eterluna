require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3307;

const routes = require('./routes/route');
const db = require('./app/models/index.js'); // ini akan mengakses models/index.js

app.use(cors({
  origin: '*',  // Mengizinkan semua asal (origin)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Mengizinkan metode yang umum digunakan
  allowedHeaders: ['Content-Type', 'Authorization'],  // Header yang diizinkan
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
