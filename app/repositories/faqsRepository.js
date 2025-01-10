const {FAQs} = require('../models');

exports.getFaqs = async (offset, limit) => {
    return await FAQs.findAll({ offset, limit, order: [['createdAt', 'DESC']] });
}

exports.getFaqById = async (id) => {
    return await FAQs.findByPk(id);
}

exports.createFaq = async (payload) => {
    return await FAQs.create(payload);
}

exports.updateFaq = async (id, payload) => {
    return await FAQs.update(payload, {
        where: { id },
    });
}

exports.deleteFaq = async (id) => {
    return await FAQs.destroy({ where: { id } });
}