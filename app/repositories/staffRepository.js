const { Staff } = require('../models');

exports.getStaffs = async () => {
    return await Staff.findAll();
}

exports.getStaffById = async (id) => {
    return await Staff.findByPk(id);
}

exports.createStaff = async (payload) => {
    return await Staff.create(payload);
}

exports.updateStaff = async (id, payload) => {
    return await Staff.update(payload, {
        where: {id},
    });
}

exports.deleteStaff = async (id) => {
    return await Staff.destroy({where: {id}});
}