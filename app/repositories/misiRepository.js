const { Misi } = require('../models');

exports.getMisis = async (offset, limit) => {
    return await Misi.findAll({ offset, limit, order: [['createdAt']] });
}

exports.getMisiById = async (id) => {
    return await Misi.findByPk(id);
}

exports.createMisi = async (payload) => {
    return await Misi.create(payload);
}

exports.updateMisi = async (id, payload) => {
    return await Misi.update(payload, {
        where: { id },
    });
}

exports.deleteMisi = async (id) => {
    return await Misi.destroy({ where: { id } });
}