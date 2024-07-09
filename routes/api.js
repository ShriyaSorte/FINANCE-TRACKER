const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// User Routes
router.post('/adduser', userController.adduser);
router.post('/loginuser', userController.loginuser);

// Transaction Routes


module.exports = router;