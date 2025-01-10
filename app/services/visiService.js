const ApplicationError = require('../../config/errors/ApplicationError');
const visiRepository = require('../repositories/visiRepository');

exports.getVisis = async () => {
    try {

        const data = await visiRepository.getVisis();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services visi : ${error.message}`, 500);
    }
}

exports.getVisiById = async (id) => {
    try {
        const data = await visiRepository.getVisiById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services visi : ${error.message}`, 500);
    }
}

exports.createVisi = async (payload) => {
    try {
        const data = await visiRepository.createVisi(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services visi : ${error.message}`, 500);
    }
}

exports.updateVisi = async (id, payload) => {
    try {
        const data = await visiRepository.updateVisi(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services visi : ${error.message}`, 500);
    }
}

exports.bulkUpdateVisi = async (payload) => {
    try {
        const updatedData = [];
        

        for (const item of payload) {
            const { id, content } = item;

            if (!id) {
                return res.status(400).json({ message: "Setiap item harus memiliki id." });
            }

            const visi = await visiRepository.getVisiById(id);
            if (!visi) {
                return res.status(404).json({ message: `Visi dengan id ${id} tidak ditemukan.` });
            }

            const updated = await visi.update({
                content: content || visi.content,
            });

            updatedData.push(updated);
        }
        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services visi : ${error.message}`, 500);
    }
}

exports.deleteVisi = async (id) => {
    try {
        const data = await visiRepository.deleteVisi(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services visi : ${error.message}`, 500);
    }
}