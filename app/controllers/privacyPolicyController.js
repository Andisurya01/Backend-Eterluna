const privacyPolicyService = require('../services/privacyPolicyService')

exports.getPrivacyPolicy = async (req, res) => {
    try {
        const data = await privacyPolicyService.getPrivacyPolicy();
        res.status(200).json({
            status: 'SUCCESS GET PRIVACY POLICY',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET PRIVACY POLICY',
            message: error.message,
        });
    }
}

exports.createPrivacyPolicy = async (req, res) => {
    try {
        const payload = req.body;
        console.log('payload', payload);
        
        const data = await privacyPolicyService.createPrivacyPolicy(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE PRIVACY POLICY',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE PRIVACY POLICY',
            message: error.message,
        });
    }
}

exports.updatePrivacyPolicy = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await privacyPolicyService.updatePrivacyPolicy(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE PRIVACY POLICY',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE PRIVACY POLICY',
            message: error.message,
        });
    }
}

exports.deletePrivacyPolicy = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await privacyPolicyService.deletePrivacyPolicy(id);
        res.status(200).json({
            status: 'SUCCESS DELETE PRIVACY POLICY',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE PRIVACY POLICY',
            message: error.message,
        });
    }
}