const creatorService = require('../services/creatorService');

exports.getCreators = async (req, res) => {
    try {
        const data = await creatorService.getCreators();
        res.status(200).json({
            status: 'SUCCESS GET ALL CREATORS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL CREATORS',
            message: error.message,
        });
    }
}

exports.getCreatorById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await creatorService.getCreatorById(id);
        res.status(200).json({
            status: 'SUCCESS GET CREATOR BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET CREATOR BY ID',
            message: error.message,
        });
    }
}

exports.createCreator = async (req, res) => {
    try {
        const payload = req.body;
        const data = await creatorService.createCreator(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE CREATOR',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE CREATOR',
            message: error.message,
        });
    }
}

exports.updateCreator = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await creatorService.updateCreator(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE CREATOR',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE CREATOR',
            message: error.message,
        });
    }
}

exports.deleteCreator = async (req, res) => {
    try {
        const { id } = req.params;
        await creatorService.deleteCreator(id);
        res.status(200).json({
            status: 'SUCCESS DELETE CREATOR',
            message: `Creator with id ${id} deleted`,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE CREATOR',
            message: error.message,
        });
    }
}

exports.getCreatorByModelId = async (req, res) => {
    try {
        const { modelId } = req.params;
        const data = await creatorService.getCreatorByModelId(modelId);
        res.status(200).json({
            status: 'SUCCESS GET CREATOR BY MODEL ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET CREATOR BY MODEL ID',
            message: error.message,
        });
    }
}