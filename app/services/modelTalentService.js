const ApplicationError = require('../../config/errors/ApplicationError');
const modelTalentRepository = require('../repositories/modelTalentRepository');
const fs = require('fs');
const path = require('path');

exports.getModelTalents = async () => {
    try {
        const data = await modelTalentRepository.getModelTalents();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.getModelTalentById = async (id) => {
    try {
        const data = await modelTalentRepository.getModelTalentById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.createModelTalent = async (payload) => {
    try {
        const data = await modelTalentRepository.createModelTalent(payload);
        console.log('data', data);

        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.updateModelTalent = async (id, payload,) => {
    try {
        const modelTalent = await modelTalentRepository.getModelTalentById(id);
        if (!modelTalent) {
            throw new ApplicationError(`ModelTalent with id ${id} not found`, 404);
        }

        console.log('payload after', payload);
        
        if (payload.background) {
            const oldImagePath = path.join(__dirname, '../../uploads/talent/background', talent.background);

            try {
                const fileExists = fs.existsSync(oldImagePath);
                if (fileExists) {
                    fs.unlinkSync(oldImagePath);
                    console.log(`Old image deleted: ${oldImagePath}`);
                } else {
                    console.log(`File not found: ${oldImagePath}`);
                }
            } catch (error) {
                console.log("Error checking or deleting file: ", error);
            }
        }

        if (payload.logo) {
            const oldImagePath = path.join(__dirname, '../../uploads/talent/logo', talent.logo);

            try {
                const fileExists = fs.existsSync(oldImagePath);
                if (fileExists) {
                    fs.unlinkSync(oldImagePath);
                    console.log(`Old image deleted: ${oldImagePath}`);
                } else {
                    console.log(`File not found: ${oldImagePath}`);
                }
            } catch (error) {
                console.error("Error checking or deleting file: ", error);
            }
        }

        if (payload.fullBody) {
            const oldImagePath = path.join(__dirname, '../../uploads/talent/fullBody', talent.fullBody);

            try {
                const fileExists = fs.existsSync(oldImagePath);
                if (fileExists) {
                    fs.unlinkSync(oldImagePath);
                    console.log(`Old image deleted: ${oldImagePath}`);
                } else {
                    console.log(`File not found: ${oldImagePath}`);
                }
            } catch (error) {
                console.error("Error checking or deleting file: ", error);
            }
        }

        if (payload.profilePicture) {
            const oldImagePath = path.join(__dirname, '../../uploads/talent/profilePicture', talent.profilePicture);
            try {
                const fileExists = fs.existsSync(oldImagePath);
                if (fileExists) {
                    fs.unlinkSync(oldImagePath);
                    console.log(`Old image deleted: ${oldImagePath}`);
                } else {
                    console.log(`File not found: ${oldImagePath}`);
                }
            } catch (error) {
                console.error("Error checking or deleting file: ", error);
            }
        }

        const updated = await modelTalent.update(
            {
                name: payload.name || modelTalent.name,
                description: payload.description || modelTalent.description,
                background: payload.background || modelTalent.background,
                logo: payload.logo || modelTalent.logo,
                fullBody: payload.fullBody || modelTalent.fullBody,
                profilePicture: payload.profilePicture || modelTalent.profilePicture
            }
        );

        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.deleteModelTalent = async (id, files) => {
    try {
        const modelTalent = await modelTalentRepository.getModelTalentById(id);
        if (!modelTalent) {
            throw new ApplicationError(`ModelTalent with id ${id} not found`, 404);
        }


        return modelTalent.destroy();
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}

exports.getModelTalentByTalentId = async (talentId) => {
    try {
        const data = await modelTalentRepository.getModelTalentByTalentId(talentId);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services modelTalent : ${error.message}`, 500);
    }
}