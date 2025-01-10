const express = require('express');
const router = express.Router();
const visiController = require('../controllers/visiController');
const { authorize } = require('../middleware/auth');

router
    .get('/', visiController.getVisis)
    .get('/:id', visiController.getVisiById)
    .post('/', authorize, visiController.createVisi)
    .put('/:id', authorize, visiController.updateVisi)
    .put('/', authorize, visiController.bulkUpdateVisi)
    .delete('/:id', authorize, visiController.deleteVisi);

module.exports = router;