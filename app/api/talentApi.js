const express = require('express');
const router = express.Router();
const talentController = require('../controllers/talentController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', talentController.getTalents)
    .get('/:id', talentController.getTalentById)
    .get('/name/eterluna', talentController.getTalentWhereTalentNameIsEterluna)
    .post('/', authorize, permissionCheck({target : "talent"}), talentController.createTalent)
    .put('/:id', authorize, permissionCheck({target : "talent"}), upload.fields([{ name: 'badge', maxCount: 1 }]), talentController.updateTalent)
    .put('/status/:id', authorize, permissionCheck({target : "talent"}), talentController.changeStatusTalent)
    .put('/debut/:id', authorize, permissionCheck({target : "talent"}), talentController.debutTalent)
    .put('/gen/:id', authorize, permissionCheck({target : "talent"}), talentController.changeGenTalent)
    .delete('/:id', authorize, permissionCheck({target : "SUPERADMIN"}), talentController.deleteTalent);

module.exports = router;