const ApplicationError = require('../../config/errors/ApplicationError');
const auditonLinkFormRepository = require('../repositories/auditonLinkFormRepository');

exports.getAuditonLinkForm = async () => {
    try {
        const data = await auditonLinkFormRepository.getAuditonLinkForm();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services auditonLinkForm : ${error.message}`, 500);
    }
}

exports.createAuditonLinkForm = async (payload) => {
    try {
        const existingData = await auditonLinkFormRepository.getAuditonLinkForm();
        if (existingData) {
            throw new ApplicationError('Auditon Link Form already exists', 400);
        }
        const data = await auditonLinkFormRepository.createAuditonLinkForm(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services auditonLinkForm : ${error.message}`, 500);
    }
}

exports.updateAuditonLinkForm = async (id, payload) => {
    try {
        const data = await auditonLinkFormRepository.updateAuditonLinkForm(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services auditonLinkForm : ${error.message}`, 500);
    }
}

exports.deleteAuditonLinkForm = async (id) => {
    try {
        const data = await auditonLinkFormRepository.deleteAuditonLinkForm(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services auditonLinkForm : ${error.message}`, 500);
    }
}