const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', newsController.getNews)
    .get('/:id', newsController.getNewsById)
    .post('/', authorize, permissionCheck({target : "news"}), upload.single('image'), newsController.createNews)
    .put('/:id', authorize, permissionCheck({target : "news"}), upload.single('image'), newsController.updateNews)
    .delete('/:id', authorize,  permissionCheck({target : "news"}), newsController.deleteNews);

module.exports = router;