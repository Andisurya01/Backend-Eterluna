const express = require('express');
const router = express.Router();
const carouselController = require('../controllers/carouselController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', carouselController.getCarousels)
    .get('/:id', carouselController.getCarouselById)
    .post('/', authorize, permissionCheck({target : "carousel"}), upload.single('image'), carouselController.createCarousel)
    .put('/:id', authorize, permissionCheck({target : "carousel"}), upload.single('image'), carouselController.updateCarousel)
    .put('/:id/status', authorize, permissionCheck({target : "carousel"}), carouselController.updateStatus)
    .delete('/:id', authorize, permissionCheck({target : "carousel"}), carouselController.deleteCarousel);

module.exports = router;