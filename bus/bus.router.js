const rourter = require('express').Router();
const BusController = require('./bus.controller');


rourter.get('/', (req, res) => BusController.getAllBuses(req, res))