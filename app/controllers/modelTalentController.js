const modelTalentService = require('../services/modelTalentService');

exports.getModelTalents = async (req, res) => {
    try {
        const data = await modelTalentService.getModelTalents();
        res.status(200).json({
            status: 'SUCCESS GET ALL MODEL TALENTS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL MODEL TALENTS',
            message: error.message,
        });
    }
}

exports.getModelTalentById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await modelTalentService.getModelTalentById(id);
        res.status(200).json({
            status: 'SUCCESS GET MODEL TALENT BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET MODEL TALENT BY ID',
            message: error.message,
        });
    }
}

exports.createModelTalent = async (req, res) => {
    try {
        const payload = req.body;
        console.log('payload', payload);
        
        const files = req.files;
        console.log('files', files);
        
        if (files) {
            if (files.background && files.background[0]) {
                payload.background = files.background[0].filename;
            }
            if (files.logo && files.logo[0]) {
                payload.logo = files.logo[0].filename;
            }
            if (files.fullBody && files.fullBody[0]) {
                payload.fullBody = files.fullBody[0].filename;
            }
        }
        console.log('payload after', payload);
        const data = await modelTalentService.createModelTalent(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE MODEL TALENT',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE MODEL TALENT',
            message: error.message,
        });
    }
}

exports.updateModelTalent = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await modelTalentService.updateModelTalent(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE MODEL TALENT',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE MODEL TALENT',
            message: error.message,
        });
    }
}

exports.deleteModelTalent = async (req, res) => {
    try {
        const { id } = req.params;
        await modelTalentService.deleteModelTalent(id);
        res.status(204).json({
            status: 'SUCCESS DELETE MODEL TALENT',
            data: null
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE MODEL TALENT',
            message: error.message,
        });
    }
}

exports.getModelTalentByTalentId = async (req, res) => {
    try {
        const { talentId } = req.params;
        const data = await modelTalentService.getModelTalentByTalentId(talentId);
        res.status(200).json({
            status: 'SUCCESS GET MODEL TALENT BY TALENT ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET MODEL TALENT BY TALENT ID',
            message: error.message,
        });
    }
}