const express = require('express');
const router = express.Router();
const genController = require('../controllers/genController');
const { authorize } = require('../middleware/auth');

router
    .get('/', genController.getGens)
    .get('/:id', genController.getGenById)
    .post('/', authorize, genController.createGen)
    .put('/:id', authorize, genController.updateGen)
    .delete('/:id', authorize, genController.deleteGen);

module.exports = router;