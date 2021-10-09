const path = require('path');
const data = require('./affirmations.json')

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

app.get('/affirmation', async (req, res) => {
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
    () => console.log(`Server running at port http://localhost:${PORT}/affirmation`)
)
