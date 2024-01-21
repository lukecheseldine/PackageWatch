import express from 'express'
import dotenv from 'dotenv'
import "reflect-metadata"

=

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

export default app
