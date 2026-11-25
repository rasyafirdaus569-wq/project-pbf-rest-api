const mahasiswaModel = require('../models/mahasiswaModel');

// 1. Read: Menampilkan semua data mahasiswa
const getAllMahasiswa = (req, res) => {
    const data = mahasiswaModel.getAll();
    res.status(200).json({
        success: true,
        message: "Berhasil mengambil semua data mahasiswa",
        data: data
    });
};

// 2. Detail: Menampilkan data mahasiswa berdasarkan ID
const getMahasiswaById = (req, res) => {
    const { id } = req.params;
    const data = mahasiswaModel.getById(id);

    if (!data) {
        return res.status(404).json({
            success: false,
            message: `Data mahasiswa dengan ID ${id} tidak ditemukan`
        });
    }

    res.status(200).json({
        success: true,
        message: "Detail data mahasiswa ditemukan",
        data: data
    });
};

// 3. Create: Menambahkan data mahasiswa baru
const createMahasiswa = (req, res) => {
    const { nim, nama, prodi } = req.body;

    if (!nim || !nama || !prodi) {
        return res.status(400).json({
            success: false,
            message: "Field nim, nama, dan prodi wajib diisi"
        });
    }

    const newData = mahasiswaModel.create({ nim, nama, prodi });
    res.status(201).json({
        success: true,
        message: "Data berhasil ditambahkan",
        data: newData
    });
};

// 4. Update: Mengubah data mahasiswa berdasarkan ID
const updateMahasiswa = (req, res) => {
    const { id } = req.params;
    const { nim, nama, prodi } = req.body;

    const updatedData = mahasiswaModel.update(id, { nim, nama, prodi });

    if (!updatedData) {
        return res.status(404).json({
            success: false,
            message: `Gagal memperbarui: Data mahasiswa dengan ID ${id} tidak ditemukan`
        });
    }

    res.status(200).json({
        success: true,
        message: "Data berhasil diperbarui",
        data: updatedData
    });
};

// 5. Delete: Menghapus data mahasiswa berdasarkan ID
const deleteMahasiswa = (req, res) => {
    const { id } = req.params;
    const deletedData = mahasiswaModel.remove(id);

    if (!deletedData) {
        return res.status(404).json({
            success: false,
            message: `Gagal menghapus: Data mahasiswa dengan ID ${id} tidak ditemukan`
        });
    }

    res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData
    });
};

module.exports = {
    getAllMahasiswa,
    getMahasiswaById,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
};