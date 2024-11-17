const newsService = require('../services/newsService');

exports.getNews = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;
        const data = await newsService.getNews(offset, limit);
        res.status(200).json({
            status: 'SUCCESS GET ALL NEWS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET ALL NEWS',
            message: error.message,
        });
    }
}

exports.getNewsById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await newsService.getNewsById(id);
        res.status(200).json({
            status: 'SUCCESS GET NEWS BY ID',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED GET NEWS BY ID',
            message: error.message,
        });
    }
}

exports.createNews = async (req, res) => {
    try {
        const { id } = req.user;
        const payload = req.body;
        const file = req.file;
        console.log('file', file);
        
        
        if (file) {
            payload.image = file.filename;
        }

        const data = await newsService.createNews(payload, id);
        
        res.status(201).json({
            status: 'SUCCESS CREATE NEWS',
            data
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED CREATE NEWS',
            message: error.message,
        });
    }
}

exports.updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: idUser } = req.user;
        const payload = req.body;
        const data = await newsService.updateNews(id, payload, idUser);
        res.status(200).json({
            status: 'SUCCESS UPDATE NEWS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED UPDATE NEWS',
            message: error.message,
        });
    }
}

exports.deleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await newsService.deleteNews(id);
        res.status(200).json({
            status: 'SUCCESS DELETE NEWS',
            data,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            status: 'FAILED DELETE NEWS',
            message: error.message,
        });
    }
}