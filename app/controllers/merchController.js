const merchService = require('../services/merchService');

exports.getMerchs = async (req, res) => {
    try {
        const data = await merchService.getMerchs();
        res.status(200).json({
            status: 'SUCCESS GET ALL MERCH',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL MERCH',
            message: error.message,
        });
    }
}

exports.getMerchById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await merchService.getMerchById(id);
        res.status(200).json({
            status: 'SUCCESS GET MERCH BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET MERCH BY ID',
            message: error.message,
        });
    }
}

exports.createMerch = async (req, res) => {
    try {
        const payload = req.body;
        const file = req.file;
        console.log('file', file);

        if (file) {
            payload.image = file.filename;
        }
        const data = await merchService.createMerch(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE MERCH',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE MERCH',
            message: error.message,
        });
    }
}

exports.updateMerch = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const file = req.file;

        file === undefined ? payload.image = 0 : payload.image = file.filename;

        const data = await merchService.updateMerch(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE MERCH',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE MERCH',
            message: error.message,
        });
    }
}

exports.deleteMerch = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await merchService.deleteMerch(id);
        res.status(200).json({
            status: 'SUCCESS DELETE MERCH',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE MERCH',
            message: error.message,
        });
    }
}
