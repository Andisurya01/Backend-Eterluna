const AppError = require('../../config/errors/ApplicationError');
const userRepository = require('../repositories/userRepository');


exports.getUsers = async () => {
    try {
        const user = await userRepository.getUsers();

        return user;
    } catch (error) {
        throw new AppError(`Error at services user : ${error.message}`, 500);
    }
};

exports.getUserById = async (id) => {
    try {
        const user = await userRepository.getUserById(id);

        return user;
    } catch (error) {
        throw new AppError(`Error at services user : ${error.message}`, 500);
    }
}

exports.getUserByEmail = async (email) => {
    try {
        const user = await userRepository.getUserByEmail(email);

        return user;
    } catch (error) {
        throw new AppError(`Error at services user : ${error.message}`, 500);
    }
}

exports.createUser = async (payload) => {
    try {
        const user = await userRepository.createUser(payload);

        return user;
    } catch (error) {
        throw new AppError(`Error at services user : ${error.message}`, 500);
    }
}

exports.deleteUser = async (id) => {
    try {
        const user = await userRepository.deleteUser(id);

        return user;
    } catch (error) {
        throw new AppError(`Error at services user : ${error.message}`, 500);
    }
}
