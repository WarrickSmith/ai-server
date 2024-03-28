import { Request, Response } from 'express'
import geminiService from '../services/geminiService'
import payloadValidator from '../validators/payloadValidator'

const handlePrompt = async (req: Request, res: Response) => {
  if (!payloadValidator(req.body)) {
    return res.status(400).json({ error: 'Invalid payload' })
  }
  try {
    const response = await geminiService.getPromptResponse(req.body)
    res.json(response)
  } catch (error) {
    console.log('ERROR : ', error)
    res.status(500).json({ error: 'Failed to get a valid response from Gemini API server' })
  }
}

export default { handlePrompt }
