const express = require('express');

const {sayHello, errors} =require('../controllers/home.controller');
const {errorParser} =require('../middlewares/middleOne');

const Router = express.Router();

Router.get('/', sayHello);
Router.use("/error",errorParser, errors);










module.exports = Router;