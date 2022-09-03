const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/all', userController.getUsers);
router.get('/random', userController.getRandomUser);
router.post('/save', userController.saveUser);

module.exports = router;
