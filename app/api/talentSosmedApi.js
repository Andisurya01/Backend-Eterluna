const express = require('express');
const router = express.Router();
const talentSosmedController = require('../controllers/talentSosmedController');
const { authorize } = require('../middleware/auth');

router
    .post('/', authorize, talentSosmedController.addSosmed)
    .put('/', talentSosmedController.updateSosmed)
    .delete('/', authorize, talentSosmedController.removeSosmed);

module.exports = router;