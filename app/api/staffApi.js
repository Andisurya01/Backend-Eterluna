const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', staffController.getStaffs)
    .get('/:id', staffController.getStaffById)
    .post('/', authorize, permissionCheck({target : "staff"}), upload.single('image'), staffController.createStaff)
    .put('/:id', authorize, permissionCheck({target : "staff"}), upload.single('image'), staffController.updateStaff)
    .delete('/:id', authorize, permissionCheck({target : "staff"}), staffController.deleteStaff);

module.exports = router;