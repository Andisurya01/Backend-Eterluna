const ApplicationError = require('../../config/errors/ApplicationError')
const { User } = require('../models');
const userRepository = require('../repositories/userRepository');
const authServices = require('../services/authService');

exports.createUser = async (payload) => {
    try {
        const { email, password, name } = payload;
        console.log('payload', payload);


        if (!email || !password) {
            throw new ApplicationError(`Please input email and password`, 500)
        }

        const encryptedPassword = await authServices.encryptedPassword(password);
        const user = await userRepository.createUser({
            email,
            password: encryptedPassword,
            name,
            role: 'ADMIN'
        })
        return user;
    } catch (error) {
        throw new ApplicationError(`Error at services user: ${error.message}`, 500);
    }
}

exports.getUsers = async () => {
    try {
        const users = await userRepository.getUsers();
        return users;
    } catch (error) {
        throw new ApplicationError(`Error at services user: ${error.message}`, 500);
    }
}

exports.getUserById = async (id) => {
    try {
        const user = await userRepository.getUserById(id);
        return user;
    } catch (error) {
        throw new ApplicationError(`Error at services user: ${error.message}`, 500);
    }
}

exports.getUserByEmail = async (email) => {
    try {
        const user = await userRepository.getUserByEmail(email);
        return user;
    } catch (error) {
        throw new ApplicationError(`Error at services user: ${error.message}`, 500);
    }
}

exports.deleteUser = async (id) => {
    try {
        const user = await userRepository.deleteUser(id);
        return user;
    } catch (error) {
        throw new ApplicationError(`Error at services user: ${error.message}`, 500);
    }
}

exports.updateUser = async (id, payload) => {
    try {
        const getUser = await userRepository.getUserById(id);
        if (!getUser) {
            throw new ApplicationError(`User with ID ${id} not found`, 404);
        }
        
        const newPayload = Object.keys(getUser.dataValues).reduce((acc, key) => {
            acc[key] = payload[key] !== undefined && payload[key] !== null ? payload[key] : getUser.dataValues[key];
            return acc;
        }, {});

        console.log('newPayload', newPayload);

        await userRepository.updateUser(id, newPayload);

        return newPayload;
    } catch (error) {
        throw new ApplicationError(`Error at services user: ${error.message}`, 500);
    }
}