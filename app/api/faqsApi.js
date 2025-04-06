const express = require('express');
const router = express.Router();
const faqsController = require('../controllers/faqsController');
const { authorize } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', faqsController.getFaqs)
    .get('/:id', faqsController.getFaqById)
    .post('/', authorize, permissionCheck({target : "others"}), faqsController.createFaq)
    .put('/:id', authorize, permissionCheck({target : "others"}), faqsController.updateFaq)
    .put('/', authorize, permissionCheck({target : "others"}), faqsController.bulkUpdateFaq)
    .delete('/:id', authorize, permissionCheck({target : "others"}), faqsController.deleteFaq);

module.exports = router;