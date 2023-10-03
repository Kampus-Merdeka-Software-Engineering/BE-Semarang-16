const express = require('express');
const route = express.Router();
const coursesController = require('../controller/coursesController.js');

route.get('/', coursesController.getAllcourses);

route.post('/', coursesController.createcourses);

module.exports = route;