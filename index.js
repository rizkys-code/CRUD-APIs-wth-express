import express from 'express';
const app = express();
const port = 3000;
import bodyParser from 'body-parser';
import { logRequest } from './src/middleware/logs.js';
import  mahasiswaRouter  from './src/routes/mahasiswa.js';
import dosenRouter from './src/routes/dosen.js';

app.use((req,res,next)=>{
    console.log("middlewae ke 2")
    next()
})

app.use(bodyParser.json());
app.use(logRequest);

app.use('/mahasiswa', mahasiswaRouter);
app.use('/dosen', dosenRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
