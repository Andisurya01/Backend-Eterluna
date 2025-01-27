const ApplicationError = require('../../config/errors/ApplicationError');
const talentRepository = require('../repositories/talentRepository');

const fs = require('fs');
const path = require('path');

exports.getTalents = async () => {
    try {
        const data = await talentRepository.getTalents();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.getTalentById = async (id) => {
    try {
        const data = await talentRepository.getTalentById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.createTalent = async (payload) => {
    try {
        const data = await talentRepository.createTalent(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.updateTalent = async (id, payload) => {
    try {
        const talent = await talentRepository.getTalentById(id);
        if (!talent) {
            throw new ApplicationError(`Talent with id ${id} not found`, 404);
        }

        // if (payload.image) {
        //     const oldImagePath = path.join(__dirname, '../../uploads/talent', talent.image);

        //     try {
        //         const fileExists = fs.existsSync(oldImagePath);
        //         if (fileExists) {
        //             fs.unlinkSync(oldImagePath);
        //             console.log(`Old image deleted: ${oldImagePath}`);
        //         } else {
        //             console.log(`File not found: ${oldImagePath}`);
        //         }
        //     } catch (error) {
        //         console.error("Error checking or deleting file: ", error);
        //     }
        // }

        const updated = await talent.update({
            name: payload.name || talent.name,
            age: payload.age || talent.age,
            description: payload.description || talent.description,
            image: payload.image || talent.image,
            video: payload.video || talent.video,
        });

        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.deleteTalent = async (id) => {
    try {
        const talent = await talentRepository.getTalentById(id);
        if (!talent) {
            throw new ApplicationError(`Talent with id ${id} not found`, 404);
        }

        const deleted = await talentRepository.deleteTalent(id);
        return deleted;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}