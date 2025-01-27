const { Sosmed } = require('../models');

exports.getSosmeds = async () => {
    return await Sosmed.findAll();
}

exports.getSosmedById = async (id) => {
    return await Sosmed.findByPk(id);
}

exports.createSosmed = async (payload) => {
    return await Sosmed.create(payload);
}

exports.updateSosmed = async (id, payload) => {
    return await Sosmed.update(payload, {
        where: { id },
    });
}

exports.deleteSosmed = async (id) => {
    return await Sosmed.destroy({ where: { id } });
};