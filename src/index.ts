import express from 'express'
import apiController from './controllers/apiController'

// Docker will expose port 5005
const app = express()
const port = 5000

app.use(express.json())

app.post('/api/prompt', apiController.handlePrompt)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
