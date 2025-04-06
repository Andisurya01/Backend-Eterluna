const ApplicationError = require('../../config/errors/ApplicationError')
const {StaffSosmed} = require('../models')
const sosmedRepository = require('../repositories/sosmedRepository')
const staffRepository = require('../repositories/staffRepository')

exports.addSosmed = async (payload) => {
    try {
        const staff = await staffRepository.getStaffById(payload.staffId);
        const sosmed = await sosmedRepository.getSosmedById(payload.sosmedId);

        if (!staff || !sosmed) {
            throw new ApplicationError(`Staff or Sosmed not found`, 404);
        }
        
        console.log('payload', payload);

        const data = await StaffSosmed.create({
            StaffId: payload.staffId,
            SosmedId: payload.sosmedId,
            url: payload.url,
        });
        console.log('data', data);

        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services staffSosmed: ${error.message}`, 500);
    }
}

exports.updateSosmed = async (payload) => {
    try {
        const { staffId, sosmedId, url } = payload;
        console.log('payload', payload);
        
        const updatedData = await StaffSosmed.update({
            url,
        }, {
            where: {
                StaffId: staffId,
                SosmedId: sosmedId,
            },
        });

        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services staffSosmed: ${error.message}`, 500);
    }
}

exports.deleteSosmed = async (payload) => {
    try {
        const { staffId, sosmedId } = payload;

        const deletedCount = await StaffSosmed.destroy({
            where: {
                StaffId: staffId,
                SosmedId: sosmedId,
            },
        });

        if (deletedCount > 0) {
            return true;
        }
        return false;
    } catch (error) {
        throw new ApplicationError(`Error at services staffSosmed: ${error.message}`, 500);
    }
}