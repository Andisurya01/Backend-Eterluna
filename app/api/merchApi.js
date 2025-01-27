const express = require('express');
const router = express.Router();
const merchController = require('../controllers/merchController');
const { authorize } = require('../middleware/auth');
const upload = require('../middleware/multer');

router
    .get('/', merchController.getMerchs)
    .get('/:id', merchController.getMerchById)
    .post('/', authorize, upload.single('image'), merchController.createMerch)
    .put('/:id', authorize, upload.single('image'), merchController.updateMerch)
    .delete('/:id', authorize, merchController.deleteMerch);

module.exports = router;