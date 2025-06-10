const { PrivacyPolicy } = require('../models');

exports.getPrivacyPolicy = async () => {
    return await PrivacyPolicy.findOne();
}

exports.createPrivacyPolicy = async (payload) => {
    return await PrivacyPolicy.create(payload);
}

exports.updatePrivacyPolicy = async (id, payload) => {
    return await PrivacyPolicy.update(payload, {
        where: { id },
    });
}

exports.deletePrivacyPolicy = async (id) => {
    return await PrivacyPolicy.destroy({ where: { id } });
}