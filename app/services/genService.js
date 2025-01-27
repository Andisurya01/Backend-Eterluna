const ApplicationError = require('../../config/errors/ApplicationError');
const genRepository = require('../repositories/genRepository');

exports.getGens = async () => {
    try {
        const data = await genRepository.getGens();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services gen : ${error.message}`, 500);
    }
}

exports.getGenById = async (id) => {
    try {
        const data = await genRepository.getGenById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services gen : ${error.message}`, 500);
    }
}

exports.createGen = async (payload) => {
    try {
        const data = await genRepository.createGen(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services gen : ${error.message}`, 500);
    }
}

exports.updateGen = async (id, payload) => {
    try {
        const gen = await genRepository.getGenById(id);
        if (!gen) {
            throw new ApplicationError(`Gen with id ${id} not found`, 404);
        }
        return gen.update(payload);
    } catch (error) {
        throw new ApplicationError(`Error at services gen : ${error.message}`, 500);
    }
}

exports.deleteGen = async (id) => {
    try {
        const gen = await genRepository.getGenById(id);
        if (!gen) {
            throw new ApplicationError(`Gen with id ${id} not found`, 404);
        }
        return gen.destroy();
    } catch (error) {
        throw new ApplicationError(`Error at services gen : ${error.message}`, 500);
    }
}