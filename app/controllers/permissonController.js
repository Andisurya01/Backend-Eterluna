const permissionService = require('../services/permissionService');

exports.getPermissions = async (req, res) => {
    try {
        const data = await permissionService.getPermissions();
        res.status(200).json({
            status: 'SUCCESS GET ALL PERMISSIONS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL PERMISSIONS',
            message: error.message,
        });
    }
}

exports.getPermissionById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await permissionService.getPermissionById(id);
        res.status(200).json({
            status: 'SUCCESS GET PERMISSION BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET PERMISSION BY ID',
            message: error.message,
        });
    }
}

exports.createPermission = async (req, res) => {
    try {
        const payload = req.body;
        const data = await permissionService.createPermission(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE PERMISSION',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE PERMISSION',
            message: error.message,
        });
    }
}

exports.updatePermission = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await permissionService.updatePermission(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE PERMISSION',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE PERMISSION',
            message: error.message,
        });
    }
}

exports.getPermissionByUserId = async (req, res) => {
    try {
        console.log('req.user', req.user.id);
        
        const userId = req.user.id;
        const data = await permissionService.getPermissionByUserId(userId);
        res.status(200).json({
            status: 'SUCCESS GET PERMISSION BY USER ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET PERMISSION BY USER ID',
            message: error.message,
        });
    }
}

exports.deletePermission = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await permissionService.deletePermission(id);
        res.status(200).json({
            status: 'SUCCESS DELETE PERMISSION',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE PERMISSION',
            message: error.message,
        });
    }
}

exports.getPermissionByMenuName = async (req, res) => {
    try {
        const { menuName } = req.params;
        const data = await permissionService.getPermissionByMenuName(menuName);
        res.status(200).json({
            status: 'SUCCESS GET PERMISSION BY MENU NAME',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET PERMISSION BY MENU NAME',
            message: error.message,
        });
    }
}

exports.deletePermissionByUserIdAndMenuName = async (req, res) => {
    try {
        const { userId, menuName } = req.params;
        const data = await permissionService.deletePermissionByUserIdandMenuName(userId, menuName);
        res.status(200).json({
            status: 'SUCCESS DELETE PERMISSION BY USER ID AND MENU NAME',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE PERMISSION BY USER ID AND MENU NAME',
            message: error.message,
        });
    }
}