const express = require('express');
const router = express.Router();
const talentController = require('../controllers/talentController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', talentController.getTalents)
    .get('/:id', talentController.getTalentById)
    .post('/', authorize, permissionCheck({target : "talent"}), upload.fields([{ name: 'background', maxCount: 1 }, { name: 'logo', maxCount: 1 },{ name: 'fullBody', maxCount: 1 }]), talentController.createTalent)
    .put('/:id', authorize, permissionCheck({target : "talent"}), upload.fields([{ name: 'background', maxCount: 1 }, { name: 'logo', maxCount: 1 }, { name: 'fullBody', maxCount: 1 }]), talentController.updateTalent)
    .put('/status/:id', authorize, permissionCheck({target : "talent"}), talentController.changeStatusTalent)
    .put('/debut/:id', authorize, permissionCheck({target : "talent"}), talentController.debutTalent)
    .put('/gen/:id', authorize, permissionCheck({target : "talent"}), talentController.changeGenTalent)
    .delete('/:id', authorize, permissionCheck, talentController.deleteTalent);

module.exports = router;