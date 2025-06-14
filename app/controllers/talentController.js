const talentService = require('../services/talentService');

exports.getTalents = async (req, res) => {
    try {
        const data = await talentService.getTalents();
        res.status(200).json({
            status: 'SUCCESS GET ALL TALENTS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL TALENTS',
            message: error.message,
        });
    }
}

exports.getTalentWhereTalentNameIsEterluna = async (req, res) => {
    try {
        console.log('getTalentWhereTalentNameIsEterluna');
        
        const data = await talentService.getTalentWhereTalentNameIsEterluna();
        res.status(200).json({
            status: 'SUCCESS GET TALENT WHERE NAME IS ETERLUNA',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET TALENT WHERE NAME IS ETERLUNA',
            message: error.message,
        });
    }
}

exports.getTalentById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await talentService.getTalentById(id);
        res.status(200).json({
            status: 'SUCCESS GET TALENT BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET TALENT BY ID',
            message: error.message,
        });
    }
}

exports.createTalent = async (req, res) => {
    try {
        const payload = req.body;
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
        const data = await talentService.createTalent(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE TALENT',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE TALENT',
            message: error.message,
        });
    }
}

exports.updateTalent = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const files = req.files;
        const data = await talentService.updateTalent(id, payload, files);
        res.status(200).json({
            status: 'SUCCESS UPDATE TALENT',
            data,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE TALENT',
            message: error.message,
        });
    }
}

exports.changeGenTalent = async (req, res) => {
    try {
        const { id } = req.params;
        const { genId } = req.body;
        const data = await talentService.changeGenTalent(id, genId);
        res.status(200).json({
            status: 'SUCCESS CHANGE GEN TALENT',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CHANGE GEN TALENT',
            message: error.message,
        });
    }
}

exports.changeStatusTalent = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await talentService.changeStatusTalent(id);
        res.status(200).json({
            status: 'SUCCESS CHANGE STATUS TALENT',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CHANGE STATUS TALENT',
            message: error.message,
        });
    }
}

exports.debutTalent = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await talentService.debutTalent(id);
        res.status(200).json({
            status: 'SUCCESS DEBUT TALENT',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DEBUT TALENT',
            message: error.message,
        });
    }
}

exports.deleteTalent = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await talentService.deleteTalent(id);
        res.status(200).json({
            status: 'SUCCESS DELETE TALENT',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE TALENT',
            message: error.message,
        });
    }
}