const { Merch } = require('../models');

exports.getMerchs = async () => {
    return await Merch.findAll();
}

exports.getMerchById = async (id) => {
    return await Merch.findByPk(id);
}

exports.createMerch = async (payload) => {
    return await Merch.create(payload);
}

exports.updateMerch = async (id, payload) => {
    return await Merch.update(payload, {
        where: {
            id
        }
    });
}

exports.deleteMerch = async (id) => {
    return await Merch.destroy({
        where: {
            id
        }
    });
}