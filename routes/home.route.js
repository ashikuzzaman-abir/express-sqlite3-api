const express = require('express');

const {sayHello} =require('../controllers/home.controller');

const Router = express.Router();

Router.get('/', sayHello);









module.exports = Router;