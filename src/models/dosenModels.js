import {db}  from '../config/connection.js'

export const getAllDosen =()=>{
    const sql = "SELECT * FROM dosen"
    return db.query(sql)
}

export const getDosenByNip =(nip)=>{
    const sql = `SELECT * FROM dosen WHERE nip = ${nip}`
    return db.query(sql)
}

export const postDosen =(nip,nama_lengkap,mataKuliah)=>{
    const sql = `INSERT INTO dosen (nip,nama_lengkap,mataKuliah) VALUES (${nip},'${nama_lengkap}','${mataKuliah}')`
    return db.query(sql)
}

export const putDosen =(nip,nama_lengkap,mataKuliah)=>{
    const sql = `UPDATE dosen SET nama_lengkap = '${nama_lengkap}', mataKuliah = '${mataKuliah}' WHERE nip = ${nip}`
    return db.query(sql)
}

export const deleteDosen =(nip)=>{
    const sql = `DELETE FROM dosen WHERE nip = ${nip}`
    return db.query(sql)
}
