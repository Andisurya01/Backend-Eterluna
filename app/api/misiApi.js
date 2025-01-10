const express = require('express');
const router = express.Router();
const misiController = require('../controllers/misiController');
const { authorize } = require('../middleware/auth');

router
    .get('/', misiController.getMisis)
    .get('/:id', misiController.getMisiById)
    .post('/', authorize, misiController.createMisi)
    .put('/:id', authorize, misiController.updateMisi)
    .put('/', authorize, misiController.bulkUpdateMisi)
    .delete('/:id', authorize, misiController.deleteMisi);

module.exports = router;