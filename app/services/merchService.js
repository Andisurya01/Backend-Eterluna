const { url } = require('inspector');
const ApplicationError = require('../../config/errors/ApplicationError');
const merchRepository = require('../repositories/merchRepository');

const fs = require('fs');
const path = require('path');

exports.getMerchs = async () => {
    try {
        const data = await merchRepository.getMerchs();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services merch : ${error.message}`, 500);
    }
}

exports.getMerchById = async (id) => {
    try {
        const data = await merchRepository.getMerchById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services merch : ${error.message}`, 500);
    }
}

exports.createMerch = async (payload) => {
    try {
        const data = await merchRepository.createMerch(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services merch : ${error.message}`, 500);
    }
}

exports.updateMerch = async (id, payload) => {
    try {
        const merch = await merchRepository.getMerchById(id);
        if (!merch) {
            throw new ApplicationError(`Merch with id ${id} not found`, 404);
        }
        console.log('payload di', payload);
        
        if (payload.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/merch', merch.image);

            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath); // Hapus file lama
                console.log(`Old image deleted: ${oldImagePath}`);
            }
        }
        const updated = await merch.update({
            name: payload.name || merch.name,
            image: payload.image || merch.image,
            url: payload.url || merch.url,
            bgColor: payload.bgColor || merch.bgColor,
            textColor: payload.textColor || merch.textColor,
        });
        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services merch : ${error.message}`, 500);
    }
}

exports.deleteMerch = async (id) => {
    try {
        const data = await merchRepository.deleteMerch(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services merch : ${error.message}`, 500);
    }
}