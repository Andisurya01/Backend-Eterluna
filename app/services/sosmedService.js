const ApplicationError = require('../../config/errors/ApplicationError');
const sosmedRepository = require('../repositories/sosmedRepository');

const fs = require('fs');
const path = require('path');

exports.getSosmeds = async () => {
    try {
        const data = await sosmedRepository.getSosmeds();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services sosmed : ${error.message}`, 500);
    }
}

exports.getSosmedById = async (id) => {
    try {
        const data = await sosmedRepository.getSosmedById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services sosmed : ${error.message}`, 500);
    }
}

exports.createSosmed = async (payload) => {
    try {
        const data = await sosmedRepository.createSosmed(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services sosmed : ${error.message}`, 500);
    }
}

exports.updateSosmed = async (id, payload) => {
    try {
        const sosmed = await sosmedRepository.getSosmedById(id);
        if (!sosmed) {
            throw new ApplicationError(`Sosmed with id ${id} not found`, 404);
        }
        console.log('payload di', payload);
        
        if (payload.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/sosmed', sosmed.image);

            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath); // Hapus file lama
                console.log(`Old image deleted: ${oldImagePath}`);
            }
        }
        const updated = await sosmed.update({
            name: payload.name || sosmed.name,
            image: payload.image || sosmed.image,
        });
        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services sosmed : ${error.message}`, 500);
    }
}

exports.deleteSosmed = async (id) => {
    try {
        const data = await sosmedRepository.deleteSosmed(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services sosmed : ${error.message}`, 500);
    }
}