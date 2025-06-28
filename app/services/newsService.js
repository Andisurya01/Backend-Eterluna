const ApplicationError = require('../../config/errors/ApplicationError');
const newsRepository = require('../repositories/newsRepository');
const fs = require('fs');
const path = require('path');
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

        console.log('Payload for update:', payload);
        console.log('Current news data:', news.image);



        if (payload.image && news.image) {
            const imageName = path.basename(news.image);

            const oldImagePath = path.join(__dirname, '../../uploads/news', imageName);

            console.log('🧾 Old image path:', oldImagePath);

            if (fs.existsSync(oldImagePath)) {
                try {
                    fs.unlinkSync(oldImagePath);
                    console.log(`✅ Old image deleted: ${oldImagePath}`);
                } catch (err) {
                    console.error(`❌ Gagal hapus file lama: ${err.message}`);
                }
            } else {
                console.warn(`⚠️ File tidak ditemukan: ${oldImagePath}`);
            }
        } else (error) =>{
            console.log('No image to delete or no old image found.', error);
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