const { News } = require('../models');

exports.getNews = async (offset,limit) => {
    return await News.findAll({offset, limit, order: [['createdAt' , "DESC"]] });
};

exports.getNewsById = async (id) => {
    return await News.findByPk(id);
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