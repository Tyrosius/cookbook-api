const pool = require('../db');

const getRezepteFromDb =
    async (req, res, next) => {
        try {
            const { rows } = await pool.query('SELECT * FROM rezepte')
            req.dbRezepte = rows;
            next();
        } catch (e) { res.sendStatus(404) }
    }

const getZutatenFromDb =
    async (req, res, next) => {
        try {
            const { rows } = await pool.query('SELECT zutaten.zutaten_name,zutaten.zutaten_menge,zutaten.rezept_id, masseinheit.bezeichnung einheit FROM zutaten LEFT JOIN masseinheit ON masseinheit.id=zutaten.masseinheiten_id')
            req.dbZutaten = rows;
            next();
        } catch (e) { res.sendStatus(404) }
    }

const getZubereitungFromDb =
    async (req, res, next) => {
        try {
            const { rows } = await pool.query('SELECT * FROM zubereitung ORDER BY id')
            req.dbZubereitung = rows;
            next();
        } catch (e) { res.sendStatus(404) }
    }

module.exports = { getRezepteFromDb, getZutatenFromDb, getZubereitungFromDb }