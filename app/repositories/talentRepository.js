const { Talent, Gen } = require('../models');

exports.getTalents = async () => {
    return await Talent.findAll({
        include: [
            {
                model: Gen,
                as: 'gen',
                // attributes: ['id', 'name'],
            },
        ]}
    );
}

exports.getTalentById = async (id) => {
    return await Talent.findByPk(id);
}

exports.createTalent = async (payload) => {
    return await Talent.create(payload);
}

exports.updateTalent = async (id, payload) => {
    return await Talent.update(payload, {
        where: { id },
    });
}

exports.deleteTalent = async (id) => {
    return await Talent.destroy({ where: { id } });
};