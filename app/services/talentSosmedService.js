const ApplicationError = require('../../config/errors/ApplicationError')
const { TalentSosmed } = require('../models')
const sosmedRepository = require('../repositories/sosmedRepository')
const talentRepository = require('../repositories/talentRepository')

exports.addSosmed = async (payload) => {
    try {
        const talent = await talentRepository.getTalentById(payload.talentId);
        const sosmed = await sosmedRepository.getSosmedById(payload.sosmedId);

        if (!talent || !sosmed) {
            throw new ApplicationError(`Talent or Sosmed not found`, 404);
        }
        console.log('payload', payload);

        const data = await TalentSosmed.create({
            TalentId: payload.talentId,
            SosmedId: payload.sosmedId,
            url: payload.url,
        });
        console.log('data', data);


        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services talentSosmed: ${error.message}`, 500);
    }
};

exports.updateSosmed = async (payload) => {
    try {
        const updatedData = [];
        console.log('payload', payload);
        
        for (const sosmed of payload.data) {
            const { talentId, sosmedId, url } = sosmed;

            const [updatedCount] = await TalentSosmed.update(
                { url },
                {
                    where: {
                        TalentId: talentId,
                        SosmedId: sosmedId,
                    },
                }
            );

            if (updatedCount > 0) {
                // Query ulang untuk mendapatkan data terbaru
                const updatedRecord = await TalentSosmed.findOne({
                    where: {
                        TalentId: talentId,
                        SosmedId: sosmedId,
                    },
                });
                updatedData.push(updatedRecord);
            }
        }

        console.log("Updated Data:", updatedData);

        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services talentSosmed: ${error.message}`, 500);
    }
};

exports.removeSosmed = async (payload) => {
    try {
        console.log('payload', payload);

        const talent = await talentRepository.getTalentById(payload.talentId);
        const sosmed = await sosmedRepository.getSosmedById(payload.sosmedId);

        // Validasi: Talent atau Sosmed Tidak Ada
        if (!talent || !sosmed) {
            throw new ApplicationError(`Talent or Sosmed not found`, 404);
        }

        // Hapus entri dari tabel pivot
        const data = await TalentSosmed.destroy({
            where: {
                TalentId: payload.talentId,
                SosmedId: payload.sosmedId,
            },
        });

        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services talentSosmed: ${error.message}`, 500);
    }
};
