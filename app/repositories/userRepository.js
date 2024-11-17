const { User } = require('../models');

exports.getUsers = async () => {    
    return await User.findAll();
};

exports.getUserById = async (id) => {
    return await User.findByPk(id);
};

exports.getUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
}

exports.createUser = async (payload) => {
    return await User.create(payload);
};

exports.deleteUser = async (id) => {
    return await User.destroy({ where: { id } });
};