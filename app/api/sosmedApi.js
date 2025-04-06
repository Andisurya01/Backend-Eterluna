const express = require('express');
const router = express.Router();
const sosmedController = require('../controllers/sosmedController');
const { authorize } = require('../middleware/auth');
const upload = require('../middleware/multer');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', sosmedController.getSosmeds)
    .get('/:id', sosmedController.getSosmedById)
    .post('/', authorize, permissionCheck({target : "others"}), upload.single('image'), sosmedController.createSosmed)
    .put('/:id', authorize, permissionCheck({target : "others"}), upload.single('image'), sosmedController.updateSosmed)
    .delete('/:id', authorize, permissionCheck({target : "others"}), sosmedController.deleteSosmed);

module.exports = router;