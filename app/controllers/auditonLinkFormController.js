const auditonLinkFormService = require('../services/auditonLinkFormService');

exports.getAuditonLinkForm = async (req, res) => {
    try {
        const data = await auditonLinkFormService.getAuditonLinkForm();
        res.status(200).json({
            status: 'SUCCESS GET AUDITON LINK FORM',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET AUDITON LINK FORM',
            message: error.message,
        });
    }
}

exports.createAuditonLinkForm = async (req, res) => {
    try {
        const payload = req.body;
        const data = await auditonLinkFormService.createAuditonLinkForm(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE AUDITON LINK FORM',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE AUDITON LINK FORM',
            message: error.message,
        });
    }
}

exports.updateAuditonLinkForm = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await auditonLinkFormService.updateAuditonLinkForm(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE AUDITON LINK FORM',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE AUDITON LINK FORM',
            message: error.message,
        });
    }
}

exports.deleteAuditonLinkForm = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await auditonLinkFormService.deleteAuditonLinkForm(id);
        res.status(200).json({
            status: 'SUCCESS DELETE AUDITON LINK FORM',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE AUDITON LINK FORM',
            message: error.message,
        });
    }
}