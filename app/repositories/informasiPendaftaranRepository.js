const {InformasiP} = require('../models');

exports.getInformasiPendaftarans = async () => {
    return await InformasiP.findAll();
}

exports.getInformasiPendaftaranById = async (id) => {
    return await InformasiP.findByPk(id);
}

exports.createInformasiPendaftaran = async (payload) => {
    return await InformasiP.create(payload);
}

exports.updateInformasiPendaftaran = async (id, payload) => {
    return await InformasiP.update(payload, {
        where: {id},
    });
}

exports.deleteInformasiPendaftaran = async (id) => {
    return await InformasiP.destroy({where: {id}});
}