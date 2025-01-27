const { Gen } = require('../models');

exports.getGens = async () => {
    return Gen.findAll();
};

exports.getGenById = async (id) => {
    return Gen.findByPk(id);
};

exports.createGen = async (payload) => {
    return Gen.create(payload);
};

exports.updateGen = async (id, payload) => {
    const gen = await Gen.findByPk(id);
    if (!gen) {
        return null;
    }
    return gen.update(payload);
};

exports.deleteGen = async (id) => {
    const gen = await Gen.findByPk(id);
    if (!gen) {
        return null;
    }
    return gen.destroy();
};