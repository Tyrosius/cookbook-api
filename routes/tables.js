const { Router } = require('express');
const pool = require('../db');

const tablesRouter = Router();

tablesRouter.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query(
            'SELECT rezepte.id,rezepte. rezept_name, zutaten.zutaten_name, zutaten.zutaten_menge, masseinheit.bezeichnung, zubereitung.schritt FROM rezepte JOIN zutaten ON zutaten.rezept_id = rezepte.id JOIN masseinheit ON masseinheit.id = zutaten.masseinheiten_id JOIN zubereitung ON zubereitung.rezept_id = rezepte.id')
        res.json({ data: rows })
    } catch (e) { res.sendStatus(404) }
});

tablesRouter.get('/zutaten', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM zutaten')
        res.json({ data: rows })
    } catch (e) { res.sendStatus(404) }
});

tablesRouter.get('/rezepte', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM rezepte')
        res.json({ data: rows })
    } catch (e) { res.sendStatus(404) }
});

tablesRouter.get('/zubereitung', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM zubereitung')
        res.json({ data: rows })
    } catch (e) { res.sendStatus(404) }
});

tablesRouter.get('/masseinheit', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM masseinheit')
        res.json({ data: rows })
    } catch (e) { res.sendStatus(404) }
});

module.exports = tablesRouter