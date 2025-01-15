const ApplicationError = require('../../config/errors/ApplicationError');
const staffRepository = require('../repositories/staffRepository');

const fs = require('fs');
const path = require('path');

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

exports.updateStaff = async (id, payload) => {
    try {
        const staff = await staffRepository.getStaffById(id);
        if (!staff) {
            throw new ApplicationError(`Staff with id ${id} not found`, 404);
        }

        if (payload.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/staff', staff.image);

            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath); // Hapus file lama
                console.log(`Old image deleted: ${oldImagePath}`);
            }
        }

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
        const staff = await staffRepository.getStaffById(id);
        console.log(staff);
        
        if (!staff) {
            throw new ApplicationError(`Staff with id ${id} not found`, 404);
        }

        const oldImagePath = path.join(__dirname, '../../uploads/staff', staff.image);

        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath); // Hapus file lama
            console.log(`Old image deleted: ${oldImagePath}`);
        }
        const data = await staffRepository.deleteStaff(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services staff : ${error.message}`, 500);
    }
}