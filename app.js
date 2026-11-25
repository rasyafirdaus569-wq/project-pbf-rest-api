const express = require('express');
const app = express();
const PORT = 3000;

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

// Middleware untuk membaca request body dalam format JSON
app.use(express.json());

// Routing utama
app.use('/api/mahasiswa', mahasiswaRoutes);

// Endpoint root untuk cek status server
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Selamat datang di REST API Sistem Informasi Data Mahasiswa"
    });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server Express berjalan di http://localhost:${PORT}`);
});