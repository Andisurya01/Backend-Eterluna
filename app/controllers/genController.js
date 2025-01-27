const genService = require('../services/genService');

exports.getGens = async (req, res) => {
    try {
        const data = await genService.getGens();
        res.status(200).json({
            status: 'SUCCESS GET ALL GENS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL GENS',
            message: error.message,
        });
    }
}

exports.getGenById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await genService.getGenById(id);
        res.status(200).json({
            status: 'SUCCESS GET GEN BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET GEN BY ID',
            message: error.message,
        });
    }
}

exports.createGen = async (req, res) => {
    try {
        const payload = req.body;
        console.log('payload', payload);
        
        const data = await genService.createGen(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE GEN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE GEN',
            message: error.message,
        });
    }
}

exports.updateGen = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await genService.updateGen(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE GEN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE GEN',
            message: error.message,
        });
    }
}

exports.deleteGen = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await genService.deleteGen(id);
        res.status(200).json({
            status: 'SUCCESS DELETE GEN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE GEN',
            message: error.message,
        });
    }
}