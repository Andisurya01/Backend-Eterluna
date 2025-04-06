const staffSosmedService = require('../services/staffSosmedService');

exports.addSosmed = async (req, res) => {
    try {
        const payload = req.body;

        const data = await staffSosmedService.addSosmed(payload);
        res.status(201).json({
            status: 'SUCCESS ADD SOSMED TO STAFF',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED ADD SOSMED TO STAFF',
            message: error.message,
        });
    }
}

exports.updateSosmed = async (req, res) => {
    try {
        const payload = req.body;

        const data = await staffSosmedService.updateSosmed(payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE SOSMED TO STAFF',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE SOSMED TO STAFF',
            message: error.message,
        });
    }
}

exports.removeSosmed = async (req, res) => {
    try {
        const payload = req.body;
        const data = await staffSosmedService.deleteSosmed(payload);
        res.status(200).json({
            status: 'SUCCESS REMOVE SOSMED FROM STAFF',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED REMOVE SOSMED FROM STAFF',
            message: error.message,
        });
    }
}