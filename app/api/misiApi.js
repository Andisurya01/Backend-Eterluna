const express = require('express');
const router = express.Router();
const misiController = require('../controllers/misiController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', misiController.getMisis)
    .get('/:id', misiController.getMisiById)
    .post('/', authorize, permissionCheck({target : "others"}), misiController.createMisi)
    .put('/:id', authorize, permissionCheck({target : "others"}), misiController.updateMisi)
    .put('/', authorize, permissionCheck({target : "others"}), misiController.bulkUpdateMisi)
    .delete('/:id', authorize, permissionCheck({target : "others"}), misiController.deleteMisi);

module.exports = router;