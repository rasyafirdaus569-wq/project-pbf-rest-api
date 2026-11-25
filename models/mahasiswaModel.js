let mahasiswa = [
    {
        id: 1,
        nim: "2026001",
        nama: "Andi Saputra",
        prodi: "Teknik Informatika"
    },
    {
        id: 2,
        nim: "2026002",
        nama: "Budi Santoso",
        prodi: "Sistem Informasi"
    }
];

const getAll = () => {
    return mahasiswa;
};

const getById = (id) => {
    return mahasiswa.find((mhs) => mhs.id === parseInt(id));
};

const create = (dataBaru) => {
    const newId = mahasiswa.length > 0 ? mahasiswa[mahasiswa.length - 1].id + 1 : 1;
    const newMahasiswa = {
        id: newId,
        nim: dataBaru.nim,
        nama: dataBaru.nama,
        prodi: dataBaru.prodi
    };
    mahasiswa.push(newMahasiswa);
    return newMahasiswa;
};

const update = (id, dataUpdate) => {
    const index = mahasiswa.findIndex((mhs) => mhs.id === parseInt(id));
    if (index === -1) return null;

    mahasiswa[index] = {
        ...mahasiswa[index],
        nim: dataUpdate.nim || mahasiswa[index].nim,
        nama: dataUpdate.nama || mahasiswa[index].nama,
        prodi: dataUpdate.prodi || mahasiswa[index].prodi
    };
    return mahasiswa[index];
};

const remove = (id) => {
    const index = mahasiswa.findIndex((mhs) => mhs.id === parseInt(id));
    if (index === -1) return null;

    const deletedData = mahasiswa.splice(index, 1);
    return deletedData[0];
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};