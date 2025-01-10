const express = require('express');
const router = express.Router();
const informasiPendaftaranController = require('../controllers/informasiPendaftaranController');
const { authorize } = require('../middleware/auth');

router
    .get('/', informasiPendaftaranController.getInformasiPendaftarans)
    .get('/:id', informasiPendaftaranController.getInformasiPendaftaranById)
    .post('/', authorize, informasiPendaftaranController.createInformasiPendaftaran)
    .put('/:id', authorize, informasiPendaftaranController.updateInformasiPendaftaran)
    .put('/', authorize, informasiPendaftaranController.bulkUpdateInformasiPendaftaran)
    .delete('/:id', authorize, informasiPendaftaranController.deleteInformasiPendaftaran);

module.exports = router;