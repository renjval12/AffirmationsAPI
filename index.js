const path = require('path');
const data = require('./api/affirmations.json')

const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

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
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
});
app.get('/api/random-affirmation', async (req, res) => {
    try {
        res.status(200).json(
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
        res.status(200).json(
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
