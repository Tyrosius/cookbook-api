const { Router } = require('express');
const pool = require('../db');

const rezepteRouter = Router();
/* TODO controller auslagern */
tablesRouter.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM rezepte')
        /* id,name,bild */
        res.json({ data: rows })
    } catch (e) { res.sendStatus(404) }
});

/* TODO  /rezepte oder / ? : rezept objekte erstellen und als liste schicken (JOIN von db, mapen, wenn eintrag nicht vorhanden erstellen)*/

/* TODO /zutaten/:id nach rezept_id: aus zutaten JOIN masseinheit WHERE rezept_id(liste aus zutatenname+menge+masseinheit)*/

/* TODO /zubereitung/:id nach rezept_id: aus zubereitung WHERE rezept_id(liste aus schritten)*/

module.exports = rezepteRouter