const path = require('path');
const data = require('./api/affirmations.json')

const express = require('express')
const rateLimit = require('express-rate-limit')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 10000,
    max: 10
})
app.use(apiRequestLimiter)

app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/index.html'));

    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
});
app.get('/api', async (req, res) => {
    try {
        res.status(200).send(data)
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
});
app.get('/api/random-affirmation', async (req, res) => {
    try {
        res.status(200).send(
            data[Math.round(Math.random() * data.length)]
        )
    } catch (err) {
        res.status(500).send({
            message: err.message
        })

    }
})
app.get('/api/random-affirmation', async (req, res) => {
    try {
        res.status(200).send(
            data[Math.round(Math.random() * data.length)]
        )
    } catch (err) {
        res.status(500).send({
            message: err.message
        })

    }
})

app.listen(
    PORT,
    () => console.log(`Server running at port ${PORT}`)
)
