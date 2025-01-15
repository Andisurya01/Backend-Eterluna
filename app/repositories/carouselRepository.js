const { Carousel } = require('../models');

exports.getCarousels = async () => {
    return await Carousel.findAll();
}

exports.getCarouselById = async (id) => {
    return await Carousel.findByPk(id);
}

exports.createCarousel = async (payload) => {
    return await Carousel.create(payload);
}

exports.updateCarousel = async (id, payload) => {
    return await Carousel.update(payload, {
        where: { id },
    });
}

exports.updateStatus = async (id, status) => {
    return await Carousel.update({ status }, {
        where: { id },
    });
}

exports.deleteCarousel = async (id) => {
    return await Carousel.destroy({ where: { id } });
}