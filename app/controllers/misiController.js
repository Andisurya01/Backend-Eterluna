const misiService = require('../services/misiService');

exports.getMisis = async (req, res) => {
    try {
        const data = await misiService.getMisis();
        res.status(200).json({
            status: 'SUCCESS GET ALL MISIS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL MISIS',
            message: error.message,
        });
    }
}

exports.getMisiById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await misiService.getMisiById(id);
        res.status(200).json({
            status: 'SUCCESS GET MISI BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET MISI BY ID',
            message: error.message,
        });
    }
}

exports.createMisi = async (req, res) => {
    try {
        const payload = req.body;
        const data = await misiService.createMisi(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE MISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE MISI',
            message: error.message,
        });
    }
}

exports.updateMisi = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        console.log('payload', payload);
        
        const data = await misiService.updateMisi(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE MISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE MISI',
            message: error.message,
        });
    }
}

exports.bulkUpdateMisi = async (req, res) => {
    try {
        const payload = req.body;
        const data = await misiService.bulkUpdateMisi(payload);
        res.status(200).json({
            status: 'SUCCESS BULK UPDATE MISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED BULK UPDATE MISI',
            message: error.message,
        });
    }
}

exports.deleteMisi = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await misiService.deleteMisi(id);
        res.status(200).json({
            status: 'SUCCESS DELETE MISI',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE MISI',
            message: error.message,
        });
    }
}