const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', aboutController.getAbouts)
    .get('/:id', aboutController.getAboutById)
    .post('/', authorize, permissionCheck({target : "others"}), aboutController.createAbout)
    .put('/:id', authorize, permissionCheck({target : "others"}), aboutController.updateAbout)
    .put('/', authorize, permissionCheck({target : "others"}), aboutController.bulkUpdateAbout)
    .delete('/:id', authorize, permissionCheck({target : "others"}), aboutController.deleteAbout);

module.exports = router;