const express = require('express');
const router = express.Router();
const sosmedController = require('../controllers/sosmedController');
const { authorize } = require('../middleware/auth');
const upload = require('../middleware/multer');

router
    .get('/', sosmedController.getSosmeds)
    .get('/:id', sosmedController.getSosmedById)
    .post('/', authorize, upload.single('image'), sosmedController.createSosmed)
    .put('/:id', authorize, upload.single('image'), sosmedController.updateSosmed)
    .delete('/:id', authorize, sosmedController.deleteSosmed);

module.exports = router;