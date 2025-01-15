const express = require('express');
const router = express.Router();
const carouselController = require('../controllers/carouselController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');

router
    .get('/', carouselController.getCarousels)
    .get('/:id', carouselController.getCarouselById)
    .post('/', authorize, upload.single('image'), carouselController.createCarousel)
    .put('/:id', authorize, upload.single('image'), carouselController.updateCarousel)
    .put('/:id/status', authorize, carouselController.updateStatus)
    .delete('/:id', carouselController.deleteCarousel);

module.exports = router;