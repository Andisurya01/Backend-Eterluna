const express = require('express');
const router = express.Router();
const auditonLinkFormController = require('../controllers/auditonLinkFormController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', auditonLinkFormController.getAuditonLinkForm)
    .post('/', authorize, permissionCheck({ target: "others" }), auditonLinkFormController.createAuditonLinkForm)
    .put('/:id', authorize, permissionCheck({ target: "others" }), auditonLinkFormController.updateAuditonLinkForm)
    .delete('/:id', authorize, permissionCheck({ target: "others" }), auditonLinkFormController.deleteAuditonLinkForm);

module.exports = router;