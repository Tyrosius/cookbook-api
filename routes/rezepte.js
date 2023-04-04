const { Router } = require('express');
const pool = require('../db');

const rezepteRouter = Router();
/* TODO controller auslagern */


/* TODO  /rezepte oder / ? : rezept objekte erstellen und als liste schicken (JOIN von db, mapen, wenn eintrag nicht vorhanden erstellen)*/
const getRezepteFromDb =
    async (req, res, next) => {
        try {
            const { rows } = await pool.query('SELECT * FROM rezepte')
            req.dbRezepte = rows;
            console.log('rezepte', req.dbRezepte)
            next();
        } catch (e) { res.sendStatus(404) }
    }

/* TODO /zutaten/:id nach rezept_id: aus zutaten JOIN masseinheit WHERE rezept_id(liste aus zutatenname+menge+masseinheit)*/
const getZutatenFromDb =
    async (req, res, next) => {
        try {
            const { rows } = await pool.query('SELECT * FROM zutaten')
            req.dbZutaten = rows;
            console.log('zutaten', req.dbZutaten)
            next();
        } catch (e) { res.sendStatus(404) }
    }

/* TODO /zubereitung/:id nach rezept_id: aus zubereitung WHERE rezept_id(liste aus schritten)*/
const getZubereitungFromDb =
    async (req, res, next) => {
        try {
            const { rows } = await pool.query('SELECT * FROM rezepte')
            req.dbZubereitung = rows;
            console.log('zubereitung', req.dbZubereitung);
            console.log('rezepte aus Zubereitung', req.dbRezepte)
            next();
        } catch (e) { res.sendStatus(404) }
    }

const listRezeptObjects = (req, res) => {
    let rezeptArray = [];
    const createRezeptObject = () => {
        let rezept = {
            id: 0,
            Name: "",
            image: "",
            zutaten: [],
            zubereitung: [],
        };

        rezept.zutaten = [dbZutaten.filter(rezept.id = rezept_id).menge + dbZutaten.filter(rezept.id = rezept_id).masseinheit/* falls vorhanden */ + "  " + dbZutaten.filter(rezept.id = rezept_id).zutatenName,];
        rezept.zubereitung = [dbZubereitung.filter(rezept.id = rezept_id).schritt]
        rezeptArray.push(rezept)
        return rezept
    }
    req.dbRezepte.map((rezept) => { });
    res.send('testing')
}

rezepteRouter.get('/', getRezepteFromDb, getZutatenFromDb, getZubereitungFromDb, listRezeptObjects
);
module.exports = rezepteRouter