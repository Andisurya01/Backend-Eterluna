const visiService = require('../services/visiService');

exports.getVisis = async (req, res) => {
    try {
        const { offset, limit } = req.query;
        const data = await visiService.getVisis(offset, limit);
        res.status(200).json({
            status: 'SUCCESS GET ALL VISIS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL VISIS',
            message: error.message,
        });
    }
}

exports.getVisiById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await visiService.getVisiById(id);
        res.status(200).json({
            status: 'SUCCESS GET VISI BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET VISI BY ID',
            message: error.message,
        });
    }
}

exports.createVisi = async (req, res) => {
    try {
        const payload = req.body;
        
        const data = await visiService.createVisi(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE VISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE VISI',
            message: error.message,
        });
    }
}

exports.updateVisi = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await visiService.updateVisi(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE VISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE VISI',
            message: error.message,
        });
    }
}

exports.bulkUpdateVisi = async (req, res) => {
    try {
        const payload = req.body;
        const data = await visiService.bulkUpdateVisi(payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE BULK VISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE BULK VISI',
            message: error.message,
        });
    }
}

exports.deleteVisi = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await visiService.deleteVisi(id);
        res.status(200).json({
            status: 'SUCCESS DELETE VISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE VISI',
            message: error.message,
        });
    }
}