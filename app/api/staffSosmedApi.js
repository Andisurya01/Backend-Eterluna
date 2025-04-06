const express = require('express');
const router = express.Router();
const staffSosmedController = require('../controllers/staffSosmedController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .post('/', authorize, permissionCheck({target : "staff"}), staffSosmedController.addSosmed)
    .put('/', authorize, permissionCheck({target : "staff"}), staffSosmedController.updateSosmed)
    .delete('/', authorize, permissionCheck({target : "staff"}), staffSosmedController.removeSosmed);

module.exports = router;