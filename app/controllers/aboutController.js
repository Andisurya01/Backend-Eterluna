const aboutService = require('../services/aboutService');

exports.getAbouts = async (req, res) => {
    try {
        const data = await aboutService.getAbouts();
        res.status(200).json({
            status: 'SUCCESS GET ALL ABOUTS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL ABOUTS',
            message: error.message,
        });
    }
}

exports.getAboutById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await aboutService.getAboutById(id);
        res.status(200).json({
            status: 'SUCCESS GET ABOUT BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ABOUT BY ID',
            message: error.message,
        });
    }
}

exports.createAbout = async (req, res) => {
    try {
        console.log('payload', req.body);
        
        const payload = req.body;
        const data = await aboutService.createAbout(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE ABOUT',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE ABOUT',
            message: error.message,
        });
    }
}

exports.updateAbout = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await aboutService.updateAbout(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE ABOUT',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE ABOUT',
            message: error.message,
        });
    }
}

exports.bulkUpdateAbout = async (req, res) => {
    try {
        const payload = req.body;
        const data = await aboutService.bulkUpdateAbout(payload);
        res.status(200).json({
            status: 'SUCCESS BULK UPDATE ABOUT',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED BULK UPDATE ABOUT',
            message: error.message,
        });
    }
}

exports.deleteAbout = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await aboutService.deleteAbout(id);
        res.status(200).json({
            status: 'SUCCESS DELETE ABOUT',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE ABOUT',
            message: error.message,
        });
    }
}