const ApplicationError = require('../../config/errors/ApplicationError');
const syaratPendaftaranRepository = require('../repositories/syaratPendaftaranRepository');

exports.getSyaratPendaftarans = async () => {
    try {
        const data = await syaratPendaftaranRepository.getSyaratPendaftarans();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services syaratPendaftaran : ${error.message}`, 500);
    }
}

exports.getSyaratPendaftaranById = async (id) => {
    try {
        const data = await syaratPendaftaranRepository.getSyaratPendaftaranById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services syaratPendaftaran : ${error.message}`, 500);
    }
}

exports.createSyaratPendaftaran = async (payload) => {
    try {
        const data = await syaratPendaftaranRepository.createSyaratPendaftaran(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services syaratPendaftaran : ${error.message}`, 500);
    }
}

exports.updateSyaratPendaftaran = async (id, payload) => {
    try {
        const data = await syaratPendaftaranRepository.updateSyaratPendaftaran(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services syaratPendaftaran : ${error.message}`, 500);
    }
}

exports.bulkUpdateSyaratPendaftaran = async (payload) => {
    try {
        const updatedData = [];

        for (const item of payload) {
            const { id, content } = item;

            if (!id) {
                return res.status(400).json({ message: "Setiap item harus memiliki id." });
            }

            const syaratPendaftaran = await syaratPendaftaranRepository.getSyaratPendaftaranById(id);
            if (!syaratPendaftaran) {
                return res.status(404).json({ message: `Syarat Pendaftaran dengan id ${id} tidak ditemukan.` });
            }

            const updated = await syaratPendaftaran.update({
                content: content || syaratPendaftaran.content,
            });
            updatedData.push(updated);
        }

        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services syaratPendaftaran : ${error.message}`, 500);
    }
}

exports.deleteSyaratPendaftaran = async (id) => {
    try {
        const data = await syaratPendaftaranRepository.deleteSyaratPendaftaran(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services syaratPendaftaran : ${error.message}`, 500);
    }
}