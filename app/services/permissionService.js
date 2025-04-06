const ApplicationError = require('../../config/errors/ApplicationError');
const userRepository = require('../repositories/userRepository');
const permissionRepository = require('../repositories/permissionRepository')

exports.getPermissions = async () => {
    try {
        const data = await permissionRepository.getPermissions();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services permission : ${error.message}`, 500);
    }
}

exports.getPermissionById = async (id) => {
    try {
        const data = await permissionRepository.getPermissionById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services permission : ${error.message}`, 500);
    }
}

exports.createPermission = async (payload) => {
    try {
        const { userId, menuName } = payload;

        // Cek apakah user ada
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw new ApplicationError(`User with ID ${userId} not found`, 404);
        }

        // Cek apakah kombinasi userId dan menuName sudah ada
        const existingPermission = await permissionRepository.getPermissionByUserIdAndMenuName(userId, menuName);

        if (existingPermission) {
            throw new ApplicationError(`Menu '${menuName}' already exists for user '${user.name}'`, 400);
        }

        // Jika belum ada, buat permission baru
        const newPermission = await permissionRepository.createPermission({ userId, menuName });

        return newPermission;
    } catch (error) {
        throw new ApplicationError(`Error at services permission: ${error.message}`, 500);
    }
};

exports.updatePermission = async (id, payload) => {
    try {
        const data = await permissionRepository.updatePermission(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services permission : ${error.message}`, 500);
    }
}

exports.getPermissionByUserId = async (userId) => {
    try {
        const data = await permissionRepository.getPermissionByUserId(userId);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services permission : ${error.message}`, 500);
    }
}

exports.deletePermission = async (id) => {
    try {
        const data = await permissionRepository.deletePermission(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services permission : ${error.message}`, 500);
    }
}   

exports.deletePermissionByUserIdandMenuName = async (userId, menuName) => {
    try {
        const data = await permissionRepository.deletePermissionByUserIdandMenuName(userId, menuName);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services permission : ${error.message}`, 500);
    }
}