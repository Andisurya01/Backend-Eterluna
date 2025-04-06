const { AdminPermissions } = require('../models');

exports.getPermissions = async () => {
    return await AdminPermissions.findAll({
    });
}

exports.getPermissionById = async (id) => {
    return await AdminPermissions.findByPk(id);
}

exports.createPermission = async ({userId, menuName}) => {
    return await AdminPermissions.create({ userId, menuName });
}

exports.updatePermission = async (id, payload) => {
    return await AdminPermissions.update(payload, {
        where: { id },
    });
}

exports.getPermissionByMenuName = async (menuName) => {
    return await AdminPermissions.findOne({ where: { menuName } });
}

exports.getPermissionByUserIdAndMenuName = async (userId, menuName) => {
    return await AdminPermissions.findOne({ where: { userId, menuName } });
}
exports.getPermissionByUserId = async (userId) => {
    return await AdminPermissions.findAll({ where: { userId } });
}

exports.deletePermission = async (id) => {
    return await AdminPermissions.destroy({ where: { id } });
}

exports.deletePermissionByUserIdandMenuName = async (userId, menuName) => {
    return await AdminPermissions.destroy({ where: { userId, menuName } });
}