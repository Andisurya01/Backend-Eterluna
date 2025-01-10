const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = 'uploads/others';

        if (req.baseUrl.includes('news')) {
            folder = 'uploads/news';
        } else if (req.baseUrl.includes('talent')) {
            folder = 'uploads/talent';
        }

        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
