const express = require('express');
const router = express.Router();
const syaratPendaftaranController = require('../controllers/syaratPendaftaranController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', syaratPendaftaranController.getSyaratPendaftarans)
    .get('/:id', syaratPendaftaranController.getSyaratPendaftaranById)
    .post('/', authorize, permissionCheck({target : "others"}), syaratPendaftaranController.createSyaratPendaftaran)
    .put('/:id', authorize, permissionCheck({target : "others"}), syaratPendaftaranController.updateSyaratPendaftaran)
    .put('/', authorize, permissionCheck({target : "others"}), syaratPendaftaranController.bulkUpdateSyaratPendaftaran)
    .delete('/:id', authorize, permissionCheck({target : "others"}), syaratPendaftaranController.deleteSyaratPendaftaran);

module.exports = router;