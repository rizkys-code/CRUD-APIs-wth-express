import { db } from '../config/connection.js';

export const getAllMahasiswa = () => {
    const sql = "SELECT * FROM mahasiswa"
    return db.query(sql)
}

export const getMahasiswaByNim = (nim) => {
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    return db.query(sql)
}

export const postMahasiswa = (nim, nama_lengkap, kelas,alamat) => {
    const sql = `INSERT INTO mahasiswa (nim,nama_lengkap,kelas,alamat) VALUES (${nim},'${nama_lengkap}','${kelas}','${alamat}')`
    return db.query(sql)
}

export const putMahasiswa = (nim, nama_lengkap, kelas,alamat) => {
    const sql = `UPDATE mahasiswa SET nama_lengkap = '${nama_lengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = ${nim}`
    return db.query(sql)
}

export const deleteMahasiswa = (nim) => {
    const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`
    return db.query(sql)
}