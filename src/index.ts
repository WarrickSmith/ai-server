import express from 'express'
import apiController from './controllers/apiController'

const app = express()
const port = 3000

app.use(express.json())

app.post('/api/prompt', apiController.handlePrompt)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
