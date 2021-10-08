const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const data = require('./affirmations.json')

app.use(express.json())
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
