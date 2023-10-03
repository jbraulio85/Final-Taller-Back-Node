'use strict'

const express = require('esxpress');
const api = express.Router();
const { generarEnunciado} = require ('./EnunciadoController');

api.post('/generarEnunciado', generarEnunciado);

module.exports = api;