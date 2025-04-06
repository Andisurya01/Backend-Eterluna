const ApplicationError = require('../../config/errors/ApplicationError');
const creatorRepository = require('../repositories/creatorRepository');

exports.getCreators = async () => {
    try {
        const data = await creatorRepository.getCreators();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services creator : ${error.message}`, 500);
    }
}

exports.getCreatorById = async (id) => {
    try {
        const data = await creatorRepository.getCreatorById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services creator : ${error.message}`, 500);
    }
}

exports.createCreator = async (payload) => {
    try {
        const data = await creatorRepository.createCreator(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services creator : ${error.message}`, 500);
    }
}

exports.updateCreator = async (id, payload) => {
    try {
        const creator = await creatorRepository.getCreatorById(id);
        if (!creator) {
            throw new ApplicationError(`Creator with id ${id} not found`, 404);
        }
        return creator.update(payload);
    } catch (error) {
        throw new ApplicationError(`Error at services creator : ${error.message}`, 500);
    }
}

exports.deleteCreator = async (id) => {
    try {
        const creator = await creatorRepository.getCreatorById(id);
        if (!creator) {
            throw new ApplicationError(`Creator with id ${id} not found`, 404);
        }
        return creator.destroy();
    } catch (error) {
        throw new ApplicationError(`Error at services creator : ${error.message}`, 500);
    }
}

exports.getCreatorByModelId = async (modelId) => {
    try {
        const data = await creatorRepository.getCreatorByModelId(modelId);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services creator : ${error.message}`, 500);
    }
}