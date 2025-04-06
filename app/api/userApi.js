const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authorize, isSuperAdmin } = require('../middleware/auth');

router
    .get('/', userController.getUsers)
    .get('/me', authorize, userController.currentUser)
    .get('/:id', userController.getUserById)
    .get('/email', authorize, isSuperAdmin, userController.getUserByEmail)
    .post('/',authorize, isSuperAdmin, userController.createUser)
    .delete('/:id', authorize, isSuperAdmin, userController.deleteUser)
    .put('/:id', authorize, isSuperAdmin, userController.updateUser);

module.exports = router;