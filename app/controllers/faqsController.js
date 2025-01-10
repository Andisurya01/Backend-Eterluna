const faqsService = require('../services/faqsService');

exports.getFaqs = async (req, res) => {
    try {
        const data = await faqsService.getFaqs();
        res.status(200).json({
            status: 'SUCCESS GET ALL FAQS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL FAQS',
            message: error.message,
        });
    }
}

exports.getFaqById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await faqsService.getFaqById(id);
        res.status(200).json({
            status: 'SUCCESS GET FAQ BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET FAQ BY ID',
            message: error.message,
        });
    }
}

exports.createFaq = async (req, res) => {
    try {
        const payload = req.body;

        const data = await faqsService.createFaq(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE FAQ',
            data
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE FAQ',
            message: error.message,
        });
    }                   
}

exports.updateFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await faqsService.updateFaq(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE FAQ',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE FAQ',
            message: error.message,
        });
    }
}

exports.bulkUpdateFaq = async (req, res) => {
    try {
        const payload = req.body;
        const data = await faqsService.bulkUpdateFaq(payload);
        res.status(200).json({
            status: 'SUCCESS BULK UPDATE FAQ',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED BULK UPDATE FAQ',
            message: error.message,
        });
    }
}

exports.deleteFaq = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await faqsService.deleteFaq(id);
        res.status(200).json({
            status: 'SUCCESS DELETE FAQ',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE FAQ',
            message: error.message,
        });
    }
}