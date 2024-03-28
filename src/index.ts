import express from 'express'
import cors from 'cors'
import apiController from './controllers/apiController'

const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = 5005

app.use (cors())
app.use(express.json())

app.post('/prompt', apiController.handlePrompt)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
