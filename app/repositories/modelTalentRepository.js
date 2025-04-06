const { ModelTalent, Creator } = require('../models');

exports.getModelTalents = async () => {
    return await ModelTalent.findAll({
        include: [
            {
                model: Creator,
                as: 'creators',
            },
        ],
    });
}

exports.getModelTalentById = async (id) => {
    return await ModelTalent.findByPk(id, {
        include: [
            {
                model: Creator,
                as: 'creators',
            },
        ],
    });
}

exports.createModelTalent = async (payload) => {
    return await ModelTalent.create(payload);
}

exports.updateModelTalent = async (id, payload) => {
    return await ModelTalent.update(payload, {
        where: { id },
    });
}

exports.deleteModelTalent = async (id) => {
    return await ModelTalent.destroy({ where: { id } });
}

exports.getModelTalentByTalentId = async (talentId) => {
    return await ModelTalent.findAll({
        where: { talentId },
        include: [
            {
                model: Creator,
                as: 'creators',
            },
        ],
    });
}