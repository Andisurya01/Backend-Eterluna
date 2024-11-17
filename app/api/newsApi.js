const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');

router
    .get('/', newsController.getNews)
    .get('/:id', newsController.getNewsById)
    .post('/', authorize, upload.single('image'), newsController.createNews)
    .put('/:id', newsController.updateNews)
    .delete('/:id', newsController.deleteNews);

module.exports = router;