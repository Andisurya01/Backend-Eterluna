const { User, AdminPermissions } = require('../models');

exports.getUsers = async () => {    
    return await User.findAll({
        include: [
            {
                model: AdminPermissions,
                as: 'permissions',
            },
        ],
    });
};

exports.getUserById = async (id) => {
    return await User.findByPk(id,
        {
            include: [
                {
                    model: AdminPermissions,
                    as: 'permissions',
                },
            ],
        });
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

exports.updateUser = async (id, payload) => {
    return await User.update(payload, { where: { id } });
};