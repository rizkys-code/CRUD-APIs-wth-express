import { getAllMahasiswa, getMahasiswaByNim, postMahasiswa } from '../models/mahasiswaModels.js';
import response from '../../response.js';


export const getAllMahasiswaController = async (req, res) => {
    try {
        const [result] = await getAllMahasiswa();
        response(200,"Mahasiswa Get List",result,res)
    } catch (err) {
        response(500,"Internal Server Error",err,res)
    }
}

export const getMahasiswaByNimController = async (req, res) => {
    try {
        const nim = req.params.nim
        const [result] = await getMahasiswaByNim(nim);
        response(200,"Mahasiswa Get List",result,res)
    } catch (err) {
        console.log(err)
        response(500,"Internal Server Error",err,res)
    }
}

export const postMahasiswaController = async (req, res) => {
    try {
        const {nim, nama_lengkap, kelas,alamat} = req.body
        const [result] = await postMahasiswa(nim, nama_lengkap, kelas,alamat);
        if(result.affectedRows === 0){
            response(400,"Bad Request",result,res)
        }else{
            response(200,"Mahasiswa Post",result,res)
        }
    } catch (err) {
        console.log(err)
        response(500,"Internal Server Error",err,res)
    }
}




