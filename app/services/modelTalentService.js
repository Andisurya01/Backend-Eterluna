const ApplicationError = require('../../config/errors/ApplicationError');
const modelTalentRepository = require('../repositories/modelTalentRepository');

exports.getModelTalents = async () => {
    try {
        const data = await modelTalentRepository.getModelTalents();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.getModelTalentById = async (id) => {
    try {
        const data = await modelTalentRepository.getModelTalentById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.createModelTalent = async (payload) => {
    try {
        const data = await modelTalentRepository.createModelTalent(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.updateModelTalent = async (id, payload) => {
    try {
        const modelTalent = await modelTalentRepository.getModelTalentById(id);
        if (!modelTalent) {
            throw new ApplicationError(`ModelTalent with id ${id} not found`, 404);
        }
        return modelTalent.update(payload);
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.deleteModelTalent = async (id) => {
    try {
        const modelTalent = await modelTalentRepository.getModelTalentById(id);
        if (!modelTalent) {
            throw new ApplicationError(`ModelTalent with id ${id} not found`, 404);
        }
        return modelTalent.destroy();
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.getModelTalentByTalentId = async (talentId) => {
    try {
        const data = await modelTalentRepository.getModelTalentByTalentId(talentId);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}