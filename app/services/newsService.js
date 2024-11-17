const ApplicationError = require('../../config/errors/ApplicationError');
const newsRepository = require('../repositories/newsRepository');
exports.getNews = async (offset, limit) => {
    try {
        console.log('services news', offset, limit);
        
        const data = await newsRepository.getNews(offset, limit);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services news : ${error.message}`, 500);
    }
}

exports.getNewsById = async (id) => {
    try {
        const data = await newsRepository.getNewsById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services news : ${error.message}`, 500);
    }
}

exports.createNews = async (payload, idUser) => {
    try {
        const data = await newsRepository.createNews(payload, idUser);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services news : ${error.message}`, 500);
    }
}

exports.updateNews = async (id, payload, idUser) => {
    try {
        const data = await newsRepository.updateNews(id, payload, idUser);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services news : ${error.message}`, 500);
    }
}

exports.deleteNews = async (id) => {
    try {
        const data = await newsRepository.deleteNews(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services news : ${error.message}`, 500);
    }
}