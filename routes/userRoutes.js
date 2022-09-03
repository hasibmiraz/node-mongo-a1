const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/all', userController.getUsers);

module.exports = router;
