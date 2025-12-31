
import express from 'express';
const router = express.Router();
import { getAllMahasiswaController, getMahasiswaByNimController, postMahasiswaController } from '../controller/mahasiswaController.js';

// get all mahasiswa
router.get('/', getAllMahasiswaController);
// get mahasiswa by nim
router.get('/:nim', getMahasiswaByNimController);
// post mahasiswa
router.post('/', postMahasiswaController);



export default router;