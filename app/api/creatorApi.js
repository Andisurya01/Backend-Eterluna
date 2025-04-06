const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');
const creatorController = require('../controllers/creatorController');

router
    .get('/', creatorController.getCreators)
    .get('/:id', creatorController.getCreatorById)
    .get('/model/:modelId', creatorController.getCreatorByModelId)
    .post('/', authorize, permissionCheck({ target: "others" }), creatorController.createCreator)
    .put('/:id', authorize, permissionCheck({ target: "others" }), creatorController.updateCreator)
    .delete('/:id', authorize, permissionCheck({ target: "others" }), creatorController.deleteCreator);

module.exports = router;