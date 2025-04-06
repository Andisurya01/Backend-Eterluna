const userServices = require('../services/userServices');

exports.createUser = async (req, res) => {
    try {
        const payload = req.body;
        console.log('payload', payload);
        
        const data = await userServices.createUser(payload);
        res.status(201).json({
            status: 'SUCCESS CREATE USER',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE USER',
            message: error.message,
        });
    }
}

exports.currentUser = async (req, res) => {
    console.log('req.user', req.user);
    res.json({
        status: "SUCCESS GET CURRENT USER",
        data: req.user
    })
}

exports.getUsers = async (req, res) => {
    try {
        const data = await userServices.getUsers();
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
    try {
        const { id } = req.params;
        const data = await userServices.getUserById(id);
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
    try {
        const { email } = req.body;
        const data = await userServices.getUserByEmail(email);
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

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await userServices.deleteUser(id);
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

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const data = await userServices.updateUser(id, payload);
        res.status(200).json({
            status: 'SUCCESS UPDATE USER',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE USER',
            message: error.message,
        });
    }
}