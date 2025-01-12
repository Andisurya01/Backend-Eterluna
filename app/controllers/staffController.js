const staffService = require('../services/staffService'); 

exports.getStaffs = async (req, res) => {
    try {
        const data = await staffService.getStaffs();
        res.status(200).json({
            status: 'SUCCESS GET ALL STAFF',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL STAFF',
            message: error.message,
        });
    }
}

exports.getStaffById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await staffService.getStaffById(id);
        res.status(200).json({
            status: 'SUCCESS GET STAFF BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET STAFF BY ID',
            message: error.message,
        });
    }
}

exports.createStaff = async (req, res) => {
    try {
        const payload = req.body;
        const file = req.file;
        console.log('file', file);
        
        
        if (file) {
            payload.image = file.filename;
        }
        const data = await staffService.createStaff(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE STAFF',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE STAFF',
            message: error.message,
        });
    }
}

exports.updateStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const file = req.file;
        console.log('file', file);
        
        if (file) {
            payload.image = file.filename;
        }
        const data = await staffService.updateStaff(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE STAFF',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE STAFF',
            message: error.message,
        });
    }
}

exports.deleteStaff = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await staffService.deleteStaff(id);
        res.status(200).json({
            status: 'SUCCESS DELETE STAFF',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE STAFF',
            message: error.message,
        });
    }
}