const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
    try {
        const data = await userService.getUsers();
        res.status(200).json({
            status: 'SUCCESS GET ALL USERS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL USERS',
            message: error.message,
        });
    }
}

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await userService.getUserById(id);
        res.status(200).json({
            status: 'SUCCESS GET USER BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET USER BY ID',
            message: error.message,
        });
    }
}

exports.getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const data = await userService.getUserByEmail(email);
        res.status(200).json({
            status: 'SUCCESS GET USER BY EMAIL',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET USER BY EMAIL',
            message: error.message,
        });
    }
}

exports.createUser = async (req, res) => {
    const payload = req.body;
    try {
        const data = await userService.createUser(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE USER',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE USER',
            message: error.message,
        });
    }
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        if (!user) {
            throw new ApplicationError('User not found', 404);
        }

        const data = await userService.deleteUser(id);
        res.status(200).json({
            status: 'SUCCESS DELETE USER',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE USER',
            message: error.message,
        });
    }
}

// Malas Ngoding