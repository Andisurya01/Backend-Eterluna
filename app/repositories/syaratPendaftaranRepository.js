const {SyaratP} = require('../models');

exports.getSyaratPendaftarans = async () => {
    return await SyaratP.findAll();
}

exports.getSyaratPendaftaranById = async (id) => {
    return await SyaratP.findByPk(id);
}

exports.createSyaratPendaftaran = async (payload) => {
    return await SyaratP.create(payload);
}

exports.updateSyaratPendaftaran = async (id, payload) => {
    return await SyaratP.update(payload, {
        where: {id},
    });
}

exports.deleteSyaratPendaftaran = async (id) => {
    return await SyaratP.destroy({where: {id}});
}