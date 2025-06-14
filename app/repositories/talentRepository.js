const { Talent, Gen, Sosmed, ModelTalent, Creator } = require('../models');
const { Op } = require('sequelize');

exports.getTalents = async () => {
    return await Talent.findAll({
        // where: {
        //     name: {
        //         [Op.ne]: 'eterluna'  // name !== 'eterluna'
        //     }
        // },
        include: [
            {
                model: Gen,
                as: 'gen',
            },
            {
                model: Sosmed,
                as: 'sosmeds',
                through: { attributes: ['url'] },
            },
            {
                model: ModelTalent,
                as: 'models',
                include: [
                    {
                        model: Creator,
                        as: 'creators',
                    }
                ]
            }
        ]
    });
}

exports.getTalentWhereTalentNameIsEterluna = async () => {
    return await Talent.findAll({
        where: {
            name: 'eterluna'  // name === 'eterluna'
        },
        include: [
            {
                model: Gen,
                as: 'gen',
            },
            {
                model: Sosmed,
                as: 'sosmeds',
                through: { attributes: ['url'] },
            },
            {
                model: ModelTalent,
                as: 'models',
                include: [
                    {
                        model: Creator,
                        as: 'creators',
                    }
                ]
            }
        ]
    });
}

exports.getTalentById = async (id) => {
    return await Talent.findByPk(
        id, {
        include: [
            {
                model: Gen,
                as: 'gen',
                // attributes: ['id', 'name'],
            },
            {
                model: Sosmed,
                as: 'sosmeds',
                through: { attributes: ['url'] },
                // attributes: ['id', 'name'],
            },
            {
                model: ModelTalent,
                as: 'models',
                include: [
                    {
                        model: Creator,
                        as: 'creators',
                        // attributes: ['id', 'name'],
                    }
                ]
                // attributes: ['id', 'name'],
            }
        ]
    });
}

exports.createTalent = async (payload) => {
    return await Talent.create(payload);
}

exports.updateTalent = async (id, payload) => {
    return await Talent.update(payload, {
        where: { id },
    });
}

exports.changeGenTalent = async (id, payload) => {
    return await Talent.update({ genId: payload }, { where: { id } });
}

exports.deleteTalent = async (id) => {
    return await Talent.destroy({ where: { id } });
};

exports.changeStatusTalent = async (id, payload) => {
    return await Talent.update({ status: 'payload' }, { where: { id } });
};

exports.debutTalent = async (id) => {
    return await Talent.update({ debut: true }, { where: { id } });
}