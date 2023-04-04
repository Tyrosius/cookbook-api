const listRezeptObjects = (req, res) => {

    let rezeptArray = [];

    /* TODO ?? createRezeptObject und createZutatenList, createZubereitungsList auslagern? */
    req.dbRezepte.map((rezept) => {

        const zutaten = req.dbZutaten.filter(zutat =>
            rezept.id === zutat.rezept_id
        )

        const stringZutaten = zutaten.map((zutat) => {
            const zutatString = zutat.einheit ? zutat.zutaten_menge + zutat.einheit + "  " + zutat.zutaten_name : zutat.zutaten_menge + "  " + zutat.zutaten_name;
            return zutatString
        })

        rezept.zutaten = stringZutaten;

        const zubereitung = req.dbZubereitung.filter(schritt =>
            schritt.rezept_id === rezept.id
        )

        const stringZubereitung = zubereitung.map((schritt) => {
            return schritt.schritt
        })

        rezept.zubereitung = stringZubereitung;

        rezeptArray.push(rezept);

    });
    res.json({ data: rezeptArray })
}

module.exports = { listRezeptObjects }