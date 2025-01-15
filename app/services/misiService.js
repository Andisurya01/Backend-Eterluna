const ApplicationError = require('../../config/errors/ApplicationError');
const misiRepository = require('../repositories/misiRepository');

exports.getMisis = async (offset, limit) => {
    try {
        const data = await misiRepository.getMisis(offset, limit);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services misi : ${error.message}`, 500);
    }
}

exports.getMisiById = async (id) => {
    try {
        const data = await misiRepository.getMisiById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services misi : ${error.message}`, 500);
    }
}

exports.createMisi = async (payload) => {
    try {
        const data = await misiRepository.createMisi(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services misi : ${error.message}`, 500);
    }
}

exports.updateMisi = async (id, payload) => {
    try {
        const data = await misiRepository.updateMisi(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services misi : ${error.message}`, 500);
    }
}

exports.bulkUpdateMisi = async (payload) => {
    try {

        const updatedData = [];

        for (const item of payload) {
            const { id, title, body } = item;

            if (!id) {
                return res.status(400).json({ message: "Setiap item harus memiliki id." });
            }

            const misi = await misiRepository.getMisiById(id);
            if (!misi) {
                return res.status(404).json({ message: `Misi dengan id ${id} tidak ditemukan.` });
            }

            const updated = await misi.update({
                title: title || misi.title,
                body: body || misi.body,
            });

            updatedData.push(updated);
        }
        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services misi : ${error.message}`, 500);
    }
}

exports.deleteMisi = async (id) => {
    try {
        const data = await misiRepository.deleteMisi(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services misi : ${error.message}`, 500);
    }
}