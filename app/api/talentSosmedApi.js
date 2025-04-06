const express = require('express');
const router = express.Router();
const talentSosmedController = require('../controllers/talentSosmedController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .post('/', authorize, permissionCheck({target : "talent"}), talentSosmedController.addSosmed)
    .put('/', authorize, permissionCheck({target : "talent"}), talentSosmedController.updateSosmed)
    .delete('/', authorize, permissionCheck({target : "talent"}), talentSosmedController.removeSosmed);

module.exports = router;