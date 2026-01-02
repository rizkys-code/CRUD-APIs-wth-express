import express from 'express';
const router = express.Router();
import { getDosen, getDosenByNipController, postDosenController, putDosenController, deleteDosenController } from '../controller/dosenController.js';

router.get('/', getDosen);
router.get('/:nip', getDosenByNipController);
router.post('/', postDosenController);
router.put('/:nip', putDosenController);
router.delete('/:nip', deleteDosenController);

export default router