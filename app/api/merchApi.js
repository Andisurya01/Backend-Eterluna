const express = require('express');
const router = express.Router();
const merchController = require('../controllers/merchController');
const { authorize } = require('../middleware/auth');
const upload = require('../middleware/multer');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', merchController.getMerchs)
    .get('/:id', merchController.getMerchById)
    .post('/', authorize, permissionCheck({target : "others"}), upload.single('image'), merchController.createMerch)
    .put('/:id', authorize, permissionCheck({target : "others"}), upload.single('image'), merchController.updateMerch)
    .delete('/:id', authorize, permissionCheck({target : "others"}), merchController.deleteMerch);

module.exports = router;