const express = require('express');
const router = express.Router();
const privacyPolicyController = require('../controllers/privacyPolicyController');
const { authorize, isSuperAdmin } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', privacyPolicyController.getPrivacyPolicy)
    .post('/', authorize, isSuperAdmin, permissionCheck({ target: "others" }), privacyPolicyController.createPrivacyPolicy)
    .put('/:id', authorize, isSuperAdmin, permissionCheck({ target: "others" }), privacyPolicyController.updatePrivacyPolicy)
    .delete('/:id', authorize, isSuperAdmin, permissionCheck({ target: "others" }), privacyPolicyController.deletePrivacyPolicy);

module.exports = router;