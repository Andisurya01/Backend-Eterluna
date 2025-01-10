const { About } = require('../models');

exports.getAbouts = async () => {
    return await About.findAll();
}

exports.getAboutById = async (id) => {
    return await About.findByPk(id);
}

exports.createAbout = async (payload) => {
    return await About.create(payload);
}

exports.updateAbout = async (id, payload) => {
    return await About.update(payload, {
        where: { id },
    });
}

exports.deleteAbout = async (id) => {
    return await About.destroy({ where: { id } });
}