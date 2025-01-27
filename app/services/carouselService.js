const ApplicationError = require('../../config/errors/ApplicationError');
const carouselRepository = require('../repositories/carouselRepository');

const fs = require('fs');
const path = require('path');

exports.getCarousels = async () => {
    try {
        const data = await carouselRepository.getCarousels();
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services carousel : ${error.message}`, 500);
    }
}

exports.getCarouselById = async (id) => {
    try {
        const data = await carouselRepository.getCarouselById(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services carousel : ${error.message}`, 500);
    }
}

exports.createCarousel = async (payload) => {
    try {
        const data = await carouselRepository.createCarousel(payload);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services carousel : ${error.message}`, 500);
    }
}

exports.updateCarousel = async (id, payload) => {
    try {
        const carousel = await carouselRepository.getCarouselById(id);
        if (!carousel) {
            throw new ApplicationError(`Carousel with id ${id} not found`, 404);
        }
        console.log('payload di sini', payload);

        if (payload.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/carousel', carousel.image);

            try {
                const fileExists = fs.existsSync(oldImagePath);
                if (fileExists) {
                    fs.unlinkSync(oldImagePath); // Hapus file lama
                    console.log(`Old image deleted: ${oldImagePath}`);
                } else {
                    console.log(`File tidak ditemukan: ${oldImagePath}`);
                }
            } catch (error) {
                console.error("Terjadi error saat mengecek atau menghapus file: ", error);
            }
        }

        const updated = await carousel.update({
            title: payload.title || carousel.title,
            image: payload.image || carousel.image,
        });

        return updated;
    } catch (error) {
        throw new ApplicationError(`Error at services carousel : ${error.message}`, 500);
    }
}

exports.updateStatusCarousel = async (id, status) => {
    try {
        const data = await carouselRepository.updateStatus(id, status);

        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services carousel : ${error.message}`, 500);
    }
}

exports.deleteCarousel = async (id) => {
    try {
        const carousel = await carouselRepository.getCarouselById(id);
        if (!carousel) {
            throw new ApplicationError(`Carousel with id ${id} not found`, 404);
        }

        if (carousel.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/carousel', carousel.image);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath); // Hapus file lama
                console.log(`Old image deleted: ${oldImagePath}`);
            }
        }
        const data = await carouselRepository.deleteCarousel(id);
        return data;
    } catch (error) {
        throw new ApplicationError(`Error at services carousel : ${error.message}`, 500);
    }
}
