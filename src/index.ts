import express from 'express'
import cors from 'cors'
import geminiController from './controllers/geminiController'

const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = 5005

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to the AI Server')
})

app.post('/gemini-prompt', geminiController.handlePrompt)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
