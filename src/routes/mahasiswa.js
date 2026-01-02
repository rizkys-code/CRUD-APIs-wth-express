
import express from 'express';
const router = express.Router();
import { getAllMahasiswaController, getMahasiswaByNimController, postMahasiswaController, putMahasiswaController, deleteMahasiswaController } from '../controller/mahasiswaController.js';

// get all mahasiswa
router.get('/', getAllMahasiswaController);
// get mahasiswa by nim
router.get('/:nim', getMahasiswaByNimController);
// post mahasiswa
router.post('/', postMahasiswaController);

// put mahasiswa
router.put('/:nim', putMahasiswaController);

// delete mahasiswa
router.delete('/:nim', deleteMahasiswaController);




export default router;