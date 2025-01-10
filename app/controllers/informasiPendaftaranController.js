const informasiPendaftaranService = require('../services/informasiPendaftaranService');

exports.getInformasiPendaftarans = async (req, res) => {
    try {
        const data = await informasiPendaftaranService.getInformasiPendaftarans();
        res.status(200).json({
            status: 'SUCCESS GET ALL INFORMASI PENDAFTARAN',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL INFORMASI PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.getInformasiPendaftaranById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await informasiPendaftaranService.getInformasiPendaftaranById(id);
        res.status(200).json({
            status: 'SUCCESS GET INFORMASI PENDAFTARAN BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET INFORMASI PENDAFTARAN BY ID',
            message: error.message,
        });
    }
}

exports.createInformasiPendaftaran = async (req, res) => {
    try {
        const payload = req.body;
        const data = await informasiPendaftaranService.createInformasiPendaftaran(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE INFORMASI PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE INFORMASI PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.updateInformasiPendaftaran = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await informasiPendaftaranService.updateInformasiPendaftaran(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE INFORMASI PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE INFORMASI PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.bulkUpdateInformasiPendaftaran = async (req, res) => {
    try {
        const payload = req.body;
        const data = await informasiPendaftaranService.bulkUpdateInformasiPendaftaran(payload);
        res.status(200).json({
            status: 'SUCCESS BULK UPDATE INFORMASI PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED BULK UPDATE INFORMASI PENDAFTARAN',
            message: error.message,
        });
    }
}

exports.deleteInformasiPendaftaran = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await informasiPendaftaranService.deleteInformasiPendaftaran(id);
        res.status(200).json({
            status: 'SUCCESS DELETE INFORMASI PENDAFTARAN',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE INFORMASI PENDAFTARAN',
            message: error.message,
        });
    }
}