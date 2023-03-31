const express = require('express')
const app = express()
const tablesRouter = require('./routes/tables')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/tables', tablesRouter)

app.get('/', (req, res) => {
    res.send("Welcome to the Nashbar(the ultimate cockbook)")
});

module.exports = app