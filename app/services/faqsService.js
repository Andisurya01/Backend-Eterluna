const ApplicationError = require('../../config/errors/ApplicationError');
const faqRepository = require('../repositories/faqsRepository');

exports.getFaqs = async () => {
    try {
        const data = await faqRepository.getFaqs();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services faqs : ${error.message}`, 500);
    }
}

exports.getFaqById = async (id) => {
    try {
        const data = await faqRepository.getFaqById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services faqs : ${error.message}`, 500);
    }
}

exports.createFaq = async (payload) => {
    try {
        const data = await faqRepository.createFaq(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services faqs : ${error.message}`, 500);
    }
}

exports.updateFaq = async (id, payload) => {
    try {
        const data = await faqRepository.updateFaq(id, payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services faqs : ${error.message}`, 500);
    }
}

exports.deleteFaq = async (id) => {
    try {
        const data = await faqRepository.deleteFaq(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services faqs : ${error.message
        }`, 500);
    }  
}
exports.bulkUpdateFaq = async (payload) => {
    try {
        const updatedData = [];

        for (const item of payload) {
            const { id, title, body } = item;

            if (!id) {
                return res.status(400).json({ message: "Setiap item harus memiliki id." });
            }

            const faq = await faqRepository.getFaqById(id);
            if (!faq) {
                return res.status(404).json({ message: `FAQ dengan id ${id} tidak ditemukan.` });
            }

            const updated = await faq.update({
                title: title || faq.title,
                body: body || faq.body,
            });
            updatedData.push(updated);
        }
        return updatedData;
    } catch (error) {
        throw new ApplicationError(`Error at services faqs : ${error.message}`, 500);
    }
}