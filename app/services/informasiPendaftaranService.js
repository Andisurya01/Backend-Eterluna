const ApplicationError = require('../../config/errors/ApplicationError');
const informasiPendaftaranRepository = require('../repositories/informasiPendaftaranRepository');

exports.getInformasiPendaftarans = async () => {
    try {
        const data = await informasiPendaftaranRepository.getInformasiPendaftarans();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services InformasiPendaftaran : ${error.message}`, 500);
    }
}

exports.getInformasiPendaftaranById = async (id) => {
    try {
        const data = await informasiPendaftaranRepository.getInformasiPendaftaranById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services InformasiPendaftaran : ${error.message}`, 500);
    }
}

exports.createInformasiPendaftaran = async (payload) => {
    try {
        const data = await informasiPendaftaranRepository.createInformasiPendaftaran(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services InformasiPendaftaran : ${error.message}`, 500);
    }
}

exports.updateInformasiPendaftaran = async (id, payload) => {
    try {
        const data = await informasiPendaftaranRepository.updateInformasiPendaftaran(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services InformasiPendaftaran : ${error.message}`, 500);
    }
}

exports.bulkUpdateInformasiPendaftaran = async (payload) => {
    try {
        const updatedData = [];

        for (const item of payload) {
            const { id, content } = item;

            if (!id) {
                return res.status(400).json({ message: "Setiap item harus memiliki id." });
            }

            const InformasiPendaftaran = await informasiPendaftaranRepository.getInformasiPendaftaranById(id);
            if (!InformasiPendaftaran) {
                return res.status(404).json({ message: `Syarat Pendaftaran dengan id ${id} tidak ditemukan.` });
            }

            const updated = await InformasiPendaftaran.update({
                content: content || InformasiPendaftaran.content,
            });
            updatedData.push(updated);
        }

        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services InformasiPendaftaran : ${error.message}`, 500);
    }
}

exports.deleteInformasiPendaftaran = async (id) => {
    try {
        const data = await informasiPendaftaranRepository.deleteInformasiPendaftaran(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services InformasiPendaftaran : ${error.message}`, 500);
    }
}