const express = require('express');
const router = express.Router();  

const auth = require('../app/api/authApi');
const news = require('../app/api/newsApi');

router.use('/auth', auth);
router.use('/news', news);

module.exports = router; 