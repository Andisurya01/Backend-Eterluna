const ApplicationError = require('../../config/errors/ApplicationError');
const privacyPolicyRepository = require('../repositories/privacyPolicyRepository');

exports.getPrivacyPolicy = async () => {
    try {
        const data = await privacyPolicyRepository.getPrivacyPolicy();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services privacy policy : ${error.message}`, 500);
    }
}

exports.createPrivacyPolicy = async (payload) => {
    try {
        const data = await privacyPolicyRepository.createPrivacyPolicy(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services privacy policy : ${error.message}`, 500);
    }
}

exports.updatePrivacyPolicy = async (id, payload) => {
    try {
        const data = await privacyPolicyRepository.updatePrivacyPolicy(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services privacy policy : ${error.message}`, 500);
    }
}

exports.deletePrivacyPolicy = async (id) => {
    try {
        const data = await privacyPolicyRepository.deletePrivacyPolicy(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services privacy policy : ${error.message}`, 500);
    }
}