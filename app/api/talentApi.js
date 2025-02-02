const express = require('express');
const router = express.Router();
const talentController = require('../controllers/talentController');
const upload = require('../middleware/multer');
const { authorize } = require('../middleware/auth');

router
    .get('/', talentController.getTalents)
    .get('/:id', talentController.getTalentById)
    .post('/', authorize, upload.fields([{ name: 'background', maxCount: 1 }, { name: 'logo', maxCount: 1 },{ name: 'fullBody', maxCount: 1 }]), talentController.createTalent)
    .put('/:id', authorize, upload.fields([{ name: 'background', maxCount: 1 }, { name: 'logo', maxCount: 1 }, { name: 'fullBody', maxCount: 1 }]), talentController.updateTalent)
    .put('/status/:id', authorize, talentController.changeStatusTalent)
    .put('/debut/:id', authorize, talentController.debutTalent)
    .put('/gen/:id', authorize, talentController.changeGenTalent)
    .delete('/:id', talentController.deleteTalent);

module.exports = router;