const { Router } = require('express');

const { getRezepteFromDb, getZutatenFromDb, getZubereitungFromDb } = require('../middleware/rezepte');

const { listRezeptObjects } = require('../controller/rezepte')

const rezepteRouter = Router();

rezepteRouter.get('/', getRezepteFromDb, getZutatenFromDb, getZubereitungFromDb, listRezeptObjects
);

module.exports = rezepteRouter