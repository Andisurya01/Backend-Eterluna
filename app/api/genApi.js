const express = require('express');
const router = express.Router();
const genController = require('../controllers/genController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', genController.getGens)
    .get('/:id', genController.getGenById)
    .post('/', authorize, permissionCheck({target : "others"}), genController.createGen)
    .put('/:id', authorize, permissionCheck({target : "others"}), genController.updateGen)
    .put('/', authorize, permissionCheck({target : "others"}), genController.bulkUpdateGen)
    .delete('/:id', authorize, permissionCheck({target : "others"}), genController.deleteGen);

module.exports = router;