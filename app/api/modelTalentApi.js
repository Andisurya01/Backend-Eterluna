const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');
const modelTalentController = require('../controllers/modelTalentController');

router
    .get('/', modelTalentController.getModelTalents)
    .get('/:id', modelTalentController.getModelTalentById)
    .get('/talent/:talentId', modelTalentController.getModelTalentByTalentId)
    .post('/', authorize, permissionCheck({ target: "talent" }), upload.fields([{ name: 'background', maxCount: 1 }, { name: 'logo', maxCount: 1 },{ name: 'fullBody', maxCount: 1 }]), modelTalentController.createModelTalent)
    .put('/:id', authorize, permissionCheck({ target: "talent" }), upload.fields([{ name: 'background', maxCount: 1 }, { name: 'logo', maxCount: 1 },{ name: 'fullBody', maxCount: 1 }]), modelTalentController.updateModelTalent)
    .delete('/:id', authorize, permissionCheck({ target: "talent" }), modelTalentController.deleteModelTalent);

module.exports = router;