const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const response = require('../../response');


router.get('/', userController.getAllUser) 
router.post('/', userController.createUser)


module.exports = router;
