const express = require('express');
const router = express.Router();
const faqsController = require('../controllers/faqsController');
const { authorize } = require('../middleware/auth');

router
    .get('/', faqsController.getFaqs)
    .get('/:id', faqsController.getFaqById)
    .post('/', authorize, faqsController.createFaq)
    .put('/:id', authorize, faqsController.updateFaq)
    .put('/', authorize, faqsController.bulkUpdateFaq)
    .delete('/:id', authorize, faqsController.deleteFaq);

module.exports = router;