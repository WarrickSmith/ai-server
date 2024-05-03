import express from 'express'
import cors from 'cors'
import geminiController from './controllers/geminiController'

const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = 5005

// Create a router for all routes under '/ai'
const aiRouter = express.Router()

// Other middleware
app.use(cors())
app.use(express.json())

// All routes defined on aiRouter will be under '/ai'
// Apply the router to the app with the '/ai' base path
app.use('/ai', aiRouter)

aiRouter.get('/', (req, res) => {
  res.send('Welcome to the AI Server')
})

// This route will be '/ai/gemini-prompt'
aiRouter.post('/gemini-prompt', geminiController.handlePrompt)

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
