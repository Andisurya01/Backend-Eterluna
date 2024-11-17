const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = 'uploads/others'; // Default folder

        if (req.baseUrl.includes('news')) {
            folder = 'uploads/news';
        } else if (req.baseUrl.includes('talent')) {
            folder = 'uploads/talent';
        }

        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nama file unik
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
