const { News } = require('../models');
const convertToIndonesiaTime = require('../util/convertTime');

exports.getNews = async (offset, limit) => {
    const newsData = await News.findAll({ offset, limit, order: [['createdAt', "DESC"]] });
    return newsData.map((news) => ({
        ...news.toJSON(),
        createdAt: convertToIndonesiaTime(news.createdAt),
        updatedAt: convertToIndonesiaTime(news.updatedAt),
    }));

};

exports.getNewsById = async (id) => {
    const news  = await News.findByPk(id);
    return {
        ...news.toJSON(),
        createdAt: convertToIndonesiaTime(news.createdAt),
        updatedAt: convertToIndonesiaTime(news.updatedAt),
    };
}

exports.createNews = async (payload, idUser) => {
    return await News.create({
        ...payload,
        createdBy: idUser,
    });
};

exports.updateNews = async (id, payload, idUser) => {
    return await News.update({
        ...payload,
        updatedBy: idUser,
    }, {
        where: { id },
    });
};

exports.deleteNews = async (id) => {
    return await News.destroy({ where: { id } });
};