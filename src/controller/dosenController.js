import { getAllDosen, getDosenByNip, postDosen, putDosen, deleteDosen } from '../models/dosenModels.js';
import response from '../../response.js';

export const getDosen = async (req,res)=>{
    try{
        const [result] = await getAllDosen();
        response(200,"Dosen Get",result,res)
    }catch(err){
        response(500,"Internal Server Error",err.message,res)
        console.log(err)
    }
}

export const getDosenByNipController = async (req,res)=>{
    try{
        const nip = req.params.nip
        const [result] = await getDosenByNip(nip);
        if(result.affectedRows === 0){
            response(400,"Bad Request","Nip not found",res)
        }else{
            response(200,"Dosen Get By Nip",result,res)
        }
    }catch(err){
        response(500,"Internal Server Error",err.message,res)
        console.log(err)
    }
}

export const postDosenController = async (req,res)=>{
    try{
        const {nip,nama_lengkap,mataKuliah} = req.body
        const [result] = await postDosen(nip,nama_lengkap,mataKuliah);
        response(200,"Dosen Post",result,res)
    }catch(err){
        response(500,"Internal Server Error",err.message,res)
        console.log(err)
    }
}

export const putDosenController = async (req,res)=>{
    try{
        const {nip,nama_lengkap,mataKuliah} = req.body
        const [result] = await putDosen(nip,nama_lengkap,mataKuliah);
        if(result.affectedRows === 0){
            response(400,"Bad Request","Nip not found",res)
        }else{
            response(200,"Dosen Put",result,res)
        }
    }catch(err){
        response(500,"Internal Server Error",err.message,res)
        console.log(err)
    }
}

export const deleteDosenController = async (req,res)=>{
    try{
        const nip = req.params.nip
        const [result] = await deleteDosen(nip);
        if(result.affectedRows === 0){
            response(400,"Bad Request","Nip not found",res)
        }else{
            response(200,"Dosen Delete",result,res)
        }
    }catch(err){
        console.log(err)
    }
}
