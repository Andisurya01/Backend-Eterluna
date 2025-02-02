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
        console.log('data', data);
        
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.updateTalent = async (id, payload, files) => {
    try {
        const talent = await talentRepository.getTalentById(id);
        if (!talent) {
            throw new ApplicationError(`Talent with id ${id} not found`, 404);
        }

        if (files) {
            if (files.background && files.background[0]) {
                payload.background = files.background[0].filename;
            }
            if (files.logo && files.logo[0]) {
                payload.logo = files.logo[0].filename;
            }
            if (files.fullBody && files.fullBody[0]) {
                payload.fullBody = files.fullBody[0].filename;
            }
        }

        if (payload.background) {
            const oldImagePath = path.join(__dirname, '../../uploads/talent', talent.background);

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
            const oldImagePath = path.join(__dirname, '../../uploads/talent', talent.logo);

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
            const oldImagePath = path.join(__dirname, '../../uploads/talent', talent.fullBody);

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
            birthdate: payload.birthdate || talent.birthdate,
            height: payload.height || talent.height,
            weight: payload.weight || talent.weight,
            gender: payload.gender || talent.gender,
            language: payload.language || talent.language,
            fanName: payload.fanName || talent.fanName,
            tag: payload.tag || talent.tag,
            bgColor: payload.bgColor || talent.bgColor,
            background: payload.background || talent.background,
            logo: payload.logo || talent.logo,
            fullBody: payload.fullBody || talent.fullBody,
        });

        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.changeGenTalent = async (id, payload) => {
    try {
        const talent = await talentRepository.getTalentById(id);
        if (!talent) {
            throw new ApplicationError(`Talent with id ${id} not found`, 404);
        }

        const updated = await talentRepository.changeGenTalent(id, payload);
        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.changeStatusTalent = async (id) => {
    try {
        const talent = await talentRepository.getTalentById(id);
        if (!talent) {
            throw new ApplicationError(`Talent with id ${id} not found`, 404);
        }
        if (talent.status === 'ACTIVE') {
            const updated = await talent.update({
                status: 'INACTIVE',
            });
            return updated;
        }
        if (talent.status === 'INACTIVE') {
            const updated = await talent.update({
                status: 'ACTIVE',
            });
            return updated;
        }

        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services talent : ${error.message}`, 500);
    }
}

exports.debutTalent = async (id) => {
    try {
        const talent = await talentRepository.getTalentById(id);
        if (!talent) {
            throw new ApplicationError(`Talent with id ${id} not found`, 404);
        }
        const updated = await talentRepository.debutTalent(id);
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