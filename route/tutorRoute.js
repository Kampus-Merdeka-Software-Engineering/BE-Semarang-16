const express = require('express');
const route = express.Router();
const tutorController = require('../controller/tutorController');

route.get('/', tutorController.getAlltutor);
route.post('/', tutorController.createtutor );

module.exports = route;