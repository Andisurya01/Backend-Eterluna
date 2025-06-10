const {AuditonLinkForm} = require('../models');

exports.getAuditonLinkForm = async () => {
    return await AuditonLinkForm.findOne();
}

exports.createAuditonLinkForm = async (payload) => {
    return await AuditonLinkForm.create(payload);
}

exports.updateAuditonLinkForm = async (id, payload) => {
    return await AuditonLinkForm.update(payload, {
        where: { id },
    });
}

exports.deleteAuditonLinkForm = async (id) => {
    return await AuditonLinkForm.destroy({ where: { id } });
}