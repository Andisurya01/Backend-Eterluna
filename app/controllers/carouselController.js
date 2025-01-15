const carouselService = require('../services/carouselService');

exports.getCarousels = async (req, res) => {
    try {
        const data = await carouselService.getCarousels();
        res.status(200).json({
            status: 'SUCCESS GET ALL CAROUSELS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL CAROUSELS',
            message: error.message,
        });
    }
}

exports.getCarouselById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await carouselService.getCarouselById(id);
        res.status(200).json({
            status: 'SUCCESS GET CAROUSEL BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET CAROUSEL BY ID',
            message: error.message,
        });
    }
}

exports.createCarousel = async (req, res) => {
    try {
        const payload = req.body;
        const file = req.file;
        console.log('file', file);

        if (file) {
            payload.image = file.filename;
        }
        const data = await carouselService.createCarousel(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE CAROUSEL',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE CAROUSEL',
            message: error.message,
        });
    }
}

exports.updateCarousel = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const file = req.file;

        console.log({
            id,
            payload,
            file
        });
        file === undefined ? payload.image = 0 : payload.image = file.filename;

        const data = await carouselService.updateCarousel(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE CAROUSEL',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE CAROUSEL',
            message: error.message,
        });
    }
}

exports.updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const data = await carouselService.updateStatusCarousel(id, status);
        res.status(200).json({
            status: 'SUCCESS UPDATE STATUS CAROUSEL',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE STATUS CAROUSEL',
            message: error.message,
        });
    }
}

exports.deleteCarousel = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await carouselService.deleteCarousel(id);
        res.status(200).json({
            status: 'SUCCESS DELETE CAROUSEL',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE CAROUSEL',
            message: error.message,
        });
    }
}