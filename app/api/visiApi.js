const express = require('express');
const router = express.Router();
const visiController = require('../controllers/visiController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', visiController.getVisis)
    .get('/:id', visiController.getVisiById)
    .post('/', authorize, permissionCheck({target : "others"}), visiController.createVisi)
    .put('/:id', authorize, permissionCheck({target : "others"}), visiController.updateVisi)
    .put('/', authorize, permissionCheck({target : "others"}), visiController.bulkUpdateVisi)
    .delete('/:id', authorize, permissionCheck({target : "others"}), visiController.deleteVisi);

module.exports = router;