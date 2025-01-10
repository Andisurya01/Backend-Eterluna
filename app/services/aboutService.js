const ApplicationError = require('../../config/errors/ApplicationError');
const aboutRepository = require('../repositories/aboutRepository');

exports.getAbouts = async () => {
    try {
        
        const data = await aboutRepository.getAbouts();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services about : ${error.message}`, 500);
    }
}

exports.getAboutById = async (id) => {
    try {
        const data = await aboutRepository.getAboutById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services about : ${error.message}`, 500);
    }
}

exports.createAbout = async (payload) => {
    try {
        const data = await aboutRepository.createAbout(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services about : ${error.message}`, 500);
    }
}

exports.updateAbout = async (id, payload) => {
    try {
        const data = await aboutRepository.updateAbout(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services about : ${error.message}`, 500);
    }
}

exports.bulkUpdateAbout = async (payload) => {
    try {
        const updatedData = [];

        for (const item of payload) {
            const { id, content } = item;

            if (!id) {
                return res.status(400).json({ message: "Setiap item harus memiliki id." });
            }

            const about = await aboutRepository.getAboutById(id);
            if (!about) {
                return res.status(404).json({ message: `About dengan id ${id} tidak ditemukan.` });
            }

            const updated = await about.update({
                content: content || about.content,
            });
            updatedData.push(updated);
        }
        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services about : ${error.message}`, 500);
    }
}

exports.deleteAbout = async (id) => {
    try {
        const data = await aboutRepository.deleteAbout(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services about : ${error.message}`, 500);
    }
}