const sosmedService = require('../services/sosmedService');

exports.getSosmeds = async (req, res) => {
    try {
        const data = await sosmedService.getSosmeds();
        res.status(200).json({
            status: 'SUCCESS GET ALL SOSMED',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL SOSMED',
            message: error.message,
        });
    }
}

exports.getSosmedById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await sosmedService.getSosmedById(id);
        res.status(200).json({
            status: 'SUCCESS GET SOSMED BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET SOSMED BY ID',
            message: error.message,
        });
    }
}

exports.createSosmed = async (req, res) => {
    try {
        const payload = req.body;
        const file = req.file;

        if (file) {
            payload.image = file.filename;
        }
        const data = await sosmedService.createSosmed(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE SOSMED',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE SOSMED',
            message: error.message,
        });
    }
}

exports.updateSosmed = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const file = req.file;
        
        file === undefined ? payload.image = 0 : payload.image = file.filename;

        const data = await sosmedService.updateSosmed(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE SOSMED',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE SOSMED',
            message: error.message,
        });
    }
}

exports.deleteSosmed = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await sosmedService.deleteSosmed(id);
        res.status(200).json({
            status: 'SUCCESS DELETE SOSMED',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE SOSMED',
            message: error.message,
        });
    }
}