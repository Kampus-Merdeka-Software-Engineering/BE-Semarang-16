const express = require('express');
const faqController = require('../controller/faqController');
const route = express.Router();


route.get('/', faqController.getAllfaq);
route.post('/', faqController.createfaq);

module.exports = route;