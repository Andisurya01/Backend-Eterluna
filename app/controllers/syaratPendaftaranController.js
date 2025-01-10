const syaratPendaftaranService = require('../services/syaratPendaftaranService');

exports.getSyaratPendaftarans = async (req, res) => {
    try {
        const data = await syaratPendaftaranService.getSyaratPendaftarans();
        res.status(200).json({
            status: 'SUCCESS GET ALL SYARAT PENDAFTARAN',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL SYARAT PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.getSyaratPendaftaranById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await syaratPendaftaranService.getSyaratPendaftaranById(id);
        res.status(200).json({
            status: 'SUCCESS GET SYARAT PENDAFTARAN BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET SYARAT PENDAFTARAN BY ID',
            message: error.message,
        });
    }
}

exports.createSyaratPendaftaran = async (req, res) => {
    try {
        const payload = req.body;
        const data = await syaratPendaftaranService.createSyaratPendaftaran(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE SYARAT PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE SYARAT PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.updateSyaratPendaftaran = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await syaratPendaftaranService.updateSyaratPendaftaran(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE SYARAT PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE SYARAT PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.bulkUpdateSyaratPendaftaran = async (req, res) => {
    try {
        const payload = req.body;
        const data = await syaratPendaftaranService.bulkUpdateSyaratPendaftaran(payload);
        res.status(200).json({
            status: 'SUCCESS BULK UPDATE SYARAT PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED BULK UPDATE SYARAT PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.deleteSyaratPendaftaran = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await syaratPendaftaranService.deleteSyaratPendaftaran(id);
        res.status(200).json({
            status: 'SUCCESS DELETE SYARAT PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE SYARAT PENDAFTARAN',
            message: error.message,
        });
    }
}