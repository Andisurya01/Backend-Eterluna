const express = require('express');
const router = express.Router();
const syaratPendaftaranController = require('../controllers/syaratPendaftaranController');
const { authorize } = require('../middleware/auth');

router
    .get('/', syaratPendaftaranController.getSyaratPendaftarans)
    .get('/:id', syaratPendaftaranController.getSyaratPendaftaranById)
    .post('/', authorize, syaratPendaftaranController.createSyaratPendaftaran)
    .put('/:id', authorize, syaratPendaftaranController.updateSyaratPendaftaran)
    .put('/', authorize, syaratPendaftaranController.bulkUpdateSyaratPendaftaran)
    .delete('/:id', authorize, syaratPendaftaranController.deleteSyaratPendaftaran);

module.exports = router;