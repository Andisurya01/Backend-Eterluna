const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const { authorize } = require('../middleware/auth');

router
    .get('/', aboutController.getAbouts)
    .get('/:id', aboutController.getAboutById)
    .post('/', authorize, aboutController.createAbout)
    .put('/:id', authorize, aboutController.updateAbout)
    .put('/', authorize, aboutController.bulkUpdateAbout)
    .delete('/:id', authorize, aboutController.deleteAbout);

module.exports = router;