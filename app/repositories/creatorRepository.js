const { Creator } = require('../models');

exports.getCreators = async () => {
    return await Creator.findAll();
}

exports.getCreatorById = async (id) => {
    return await Creator.findByPk(id);
}

exports.createCreator = async (payload) => {
    return await Creator.create(payload);
}

exports.updateCreator = async (id, payload) => {
    return await Creator.update(payload, {
        where: { id },
    });
}

exports.deleteCreator = async (id) => {
    return await Creator.destroy({ where: { id } });
}

exports.getCreatorByModelId = async (modelId) => {
    return await Creator.findAll({
        where: { modelId },
    });
}