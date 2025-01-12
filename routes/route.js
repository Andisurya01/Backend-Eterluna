const express = require('express');
const router = express.Router();  

const auth = require('../app/api/authApi');
const news = require('../app/api/newsApi');
const misi = require('../app/api/misiApi');
const about = require('../app/api/aboutApi');
const visi = require('../app/api/visiApi');
const syaratPendaftaran = require('../app/api/syaratPendaftaranApi');
const informasiPendaftaran = require('../app/api/informasiPendaftaranApi');
const faqs = require('../app/api/faqsApi');
// const talent = require('../app/api/talentApi');
const staff = require('../app/api/staffApi');

router.use('/auth', auth);
router.use('/news', news);
router.use('/misi', misi);
router.use('/about', about);
router.use('/visi', visi);
router.use('/syarat-pendaftaran', syaratPendaftaran);
router.use('/informasi-pendaftaran', informasiPendaftaran);
router.use('/faqs', faqs);
// router.use('/talent', talent);
router.use('/staff', staff);

module.exports = router; 