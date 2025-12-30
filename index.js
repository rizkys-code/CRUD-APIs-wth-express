const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response');


app.use(bodyParser.json());

app.get('/', (req, res) => {
        response(200 ,"API v1 ready to go","success",res)
});

// get all mahasiswa
app.get('/mahasiswa', (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql,(err,field)=>{
        if (err) throw err
        response(200,"Mahasiswa Get List",field,res)
    })
});

// search mahasiswa by nim
app.get('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (err, field)=>{
        if (err) throw err
        response(200,"success get detail mahasiswa",field,res)
    })
    
});

app.post('/mahasiswa', (req,res)=>{
    const {nim, nama_lengkap, kelas,alamat} = req.body
    const sql = `INSERT INTO mahasiswa (nim,nama_lengkap,kelas,alamat) VALUES (${nim},'${nama_lengkap}','${kelas}','${alamat}')`
    db.query(sql, (err, field)=>{
        if (err) response(500,"error post mahasiswa",err,res)
        if(field.affectedRows) {console.log("data inserted")
            const data = {
                isSuccess: field.affectedRows,
                id: field.insertId
            }
            response(200,"success post mahasiswa",data,res)
        }else{
            console.log("data not inserted")
        }
    })
})

app.put('/mahasiswa', (req,res)=>{
    const {nim, nama_lengkap, kelas,alamat} = req.body
    console.log(req.body)
    const sql = `UPDATE mahasiswa SET nama_lengkap = '${nama_lengkap}', kelas = '${kelas}', alamat = '${alamat}' WHERE nim = ${nim}`
    db.query(sql, (err,field)=>{
        if (err) response(500,"error update mahasiswa",err,res)
            if (field?.affectedRows){
                const data = {
                    isSuccess: field.affectedRows,
                    message: field.info
                }
                response(200,"successfuly update mahasiswa",data,res)
            }else{
                response(404,"error update mahasiswa","data not found",res)
            }
    })
})

app.delete('/mahasiswa', (req,res)=>{
    const {nim} = req.body
    const sql = `DELETE FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (err,field)=>{
        if (err) response(500,"error delete mahasiswa",err,res)
            if (field.affectedRows){
                const data ={
                    isDeleted: field.affectedRows
                }
                response(200,"successfuly delete mahasiswa",data,res)
            }else{
                response(404,"error delete mahasiswa","data not found",res)
            }
    })
})
// end mahasiswa

// get all dosen
app.get('/dosen', (req,res)=>{
    const sql = "SELECT * FROM dosen"
    db.query(sql, (err, result)=>{
        if (err) throw err
        response(200,"berhasil meampilkan data dosen",result,res)
    })
})

// get dosen by nip
app.get('/dosen/:nip', (req,res)=>{
    const nip = req.params.nip
    const sql = `SELECT * FROM dosen WHERE nip =${nip}`
    db.query(sql, (err,result)=>{
        if (err) throw response(500,"error get dosen",err,res)
        if (result?.length){
            response(200,`berhasil meampilkan data dosen by nip ${nip}`,result,res)
        }else{
            response(404,"error get dosen","data not found",res)
        }
    })
})

app.post('/dosen', (req,res)=> {
    const {nip,nama_lengkap,mataKuliah} = req.body
    console.log(req.body)
    const sql = `INSERT INTO dosen (nip,nama_lengkap,mataKuliah) VALUES (${nip},'${nama_lengkap}','${mataKuliah}')`
    db.query(sql, (err,result)=>{
        if (err) response(500,"error post dosen",err,res)
        if(result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                id: result.insertId
            }
            response(200,"berhasil menambah data dosen",data,res)
        }else{
            console.log("data not inserted")
        }
    })
})

// update dosen
app.put('/dosen', (req,res)=>{
    const {nip,nama_lengkap,mataKuliah} = req.body
    console.log(req.body)
    const sql = `UPDATE dosen SET nama_lengkap = '${nama_lengkap}', mataKuliah = '${mataKuliah}' WHERE nip = ${nip}`
    db.query(sql, (err,result)=>{
        if (err) response(500,"error update dosen",err,res)
            if(result?.affectedRows){console.log("data updated")
                const data = {
                    isSuccess: result.affectedRows,
                    message: result.info
                }
                response(200,"berhasil update data dosen",data,res)
            }else{
                response(404,"error update dosen","data not found",res)
            }
    })
})

app.delete('/dosen', (req,res)=>{
    const {nip} = req.body
    const sql = `DELETE FROM dosen WHERE nip = ${nip}`
    db.query(sql, (err,result)=>{
        if(err) response(500,"error delete dosen",err,res)
        
        if(result?.affectedRows){
            const data ={
                isDeleted: result.affectedRows
            }
            response(200,"berhasil delete data dosen",data,res)
        }else{
            response(404,"error delete dosen","data not found",res)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
