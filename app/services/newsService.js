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
        const news = await newsRepository.getNewsById(id);
        if (!news) {
            throw new ApplicationError(`News with id ${id} not found`, 404);
        }

        if (payload.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/news', news.image);

            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath); // Hapus file lama
                console.log(`Old image deleted: ${oldImagePath}`);
            }
        }

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