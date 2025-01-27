const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = 'uploads/others';

        if (req.baseUrl.includes('news')) {
            folder = 'uploads/news';
        } else if (req.baseUrl.includes('talent') && file.fieldname === 'background') {
            folder = 'uploads/talent/background';
        } else if (req.baseUrl.includes('talent') && file.fieldname === 'logo') {
            folder = 'uploads/talent/logo';
        } else if (req.baseUrl.includes('talent') && file.fieldname === 'fullBody') {
            folder = 'uploads/talent/fullBody';
        } else if (req.baseUrl.includes('logo')) {
            folder = 'uploads/staff';
        } else if (req.baseUrl.includes('carousel')) {
            folder = 'uploads/carousel';
        } else if (req.baseUrl.includes('sosmed')) {
            folder = 'uploads/sosmed';
        } else if (req.baseUrl.includes('merch')) {
            folder = 'uploads/merch';
        }

        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
