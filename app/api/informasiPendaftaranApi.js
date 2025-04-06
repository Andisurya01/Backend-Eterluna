const express = require('express');
const router = express.Router();
const informasiPendaftaranController = require('../controllers/informasiPendaftaranController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', informasiPendaftaranController.getInformasiPendaftarans)
    .get('/:id', informasiPendaftaranController.getInformasiPendaftaranById)
    .post('/', authorize, permissionCheck({target : "others"}), informasiPendaftaranController.createInformasiPendaftaran)
    .put('/:id', authorize, permissionCheck({target : "others"}), informasiPendaftaranController.updateInformasiPendaftaran)
    .put('/', authorize, permissionCheck({target : "others"}), informasiPendaftaranController.bulkUpdateInformasiPendaftaran)
    .delete('/:id', authorize, permissionCheck({target : "others"}), informasiPendaftaranController.deleteInformasiPendaftaran);

module.exports = router;