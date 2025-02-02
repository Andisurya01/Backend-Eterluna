const talentSosmedService = require('../services/talentSosmedService');

exports.addSosmed = async (req, res) => {
    try {
        const payload = req.body;
        console.log('payload', payload);
        
        const data = await talentSosmedService.addSosmed(payload);
        res.status(201).json({
            status: 'SUCCESS ADD SOSMED TO TALENT',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED ADD SOSMED TO TALENT',
            message: error.message,
        });
    }
}

exports.updateSosmed = async (req, res) => {
    try {
        const payload = req.body;
        console.log('payload', payload);
        
        const data = await talentSosmedService.updateSosmed(payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE SOSMED TO TALENT',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE SOSMED TO TALENT',
            message: error.message,
        });
    }
}

exports.removeSosmed = async (req, res) => {
    try {
        console.log('req.body', req.body);
        
        const payload = req.body;
        const data = await talentSosmedService.removeSosmed(payload);
        res.status(200).json({
            status: 'SUCCESS REMOVE SOSMED FROM TALENT',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED REMOVE SOSMED FROM TALENT',
            message: error.message,
        });
    }
}