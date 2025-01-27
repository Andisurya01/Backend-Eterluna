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
const talent = require('../app/api/talentApi');
const staff = require('../app/api/staffApi');
const carousel = require('../app/api/carouselApi');
const sosmed = require('../app/api/sosmedApi');
const merch = require('../app/api/merchApi');
const gen = require('../app/api/genApi');

router.use('/auth', auth);
router.use('/news', news);
router.use('/misi', misi);
router.use('/about', about);
router.use('/visi', visi);
router.use('/syarat-pendaftaran', syaratPendaftaran);
router.use('/informasi-pendaftaran', informasiPendaftaran);
router.use('/faqs', faqs);
router.use('/talent', talent);
router.use('/staff', staff);
router.use('/carousel', carousel);
router.use('/sosmed', sosmed);
router.use('/merch', merch);
router.use('/gen', gen);

module.exports = router; 