const express = require('express')
const app = express()
const tablesRouter = require('./routes/tables')
const rezepteRouter = require('./routes/rezepte')
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/tables', tablesRouter)
app.use('/rezepte', rezepteRouter)

app.get('/', (req, res) => {
    res.send("Welcome to the Nashbar(the ultimate cockbook)")
});

module.exports = app