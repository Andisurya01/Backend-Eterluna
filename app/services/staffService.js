const ApplicationError = require('../../config/errors/ApplicationError');
const staffRepository = require('../repositories/staffRepository');

exports.getStaffs = async () => {
    try {
        const data = await staffRepository.getStaffs();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services staff : ${error.message}`, 500);
    }
}

exports.getStaffById = async (id) => {
    try {
        const data = await staffRepository.getStaffById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services staff : ${error.message}`, 500);
    }
}

exports.createStaff = async (payload) => {
    try {
        const data = await staffRepository.createStaff(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services staff : ${error.message}`, 500);
    }
}

const fs = require('fs');
const path = require('path');

exports.updateStaff = async (id, payload) => {
    try {
        // Ambil data staff berdasarkan ID
        const staff = await staffRepository.getStaffById(id);
        if (!staff) {
            throw new ApplicationError(`Staff with id ${id} not found`, 404);
        }

        // Jika image baru ada, hapus file lama
        if (payload.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/staff', staff.image);

            // Cek apakah file lama ada di folder
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath); // Hapus file lama
                console.log(`Old image deleted: ${oldImagePath}`);
            }
        }

        // Update data staff dengan data baru (atau gunakan data lama jika tidak ada di payload)
        const updated = await staff.update({
            name: payload.name || staff.name,
            position: payload.position || staff.position,
            image: payload.image || staff.image,
        });

        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services staff : ${error.message}`, 500);
    }
};


exports.deleteStaff = async (id) => {
    try {
        const data = await staffRepository.deleteStaff(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services staff : ${error.message}`, 500);
    }
}