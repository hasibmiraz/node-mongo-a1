const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const getAllUsers = require('../utils/getUsers');

router.get('/all', getAllUsers, userController.getUsers);
router.get('/random', userController.getRandomUser);
router.post('/save', userController.saveUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
