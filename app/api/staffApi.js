const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');

router
    .get('/', staffController.getStaffs)
    .get('/:id', staffController.getStaffById)
    .post('/', authorize, upload.single('image'), staffController.createStaff)
    .put('/:id', authorize, upload.single('image'), staffController.updateStaff)
    .delete('/:id', staffController.deleteStaff);

module.exports = router;