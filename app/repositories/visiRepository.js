const {Visi} = require('../models');

exports.getVisis = async () => {
    return await Visi.findAll();
}

exports.getVisiById = async (id) => {
    return await Visi.findByPk(id);
}

exports.createVisi = async (payload) => {
    return await Visi.create(payload);
}

exports.updateVisi = async (id, payload) => {
    return await Visi.update(payload, {
        where: {id},
    });
}

exports.deleteVisi = async (id) => {
    return await Visi.destroy({where: {id}});
}