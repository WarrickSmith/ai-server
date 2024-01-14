import { Request, Response } from 'express'
import claudeService from '../services/claudeService'
import payloadValidator from '../validators/payloadValidator'

const handlePrompt = async (req: Request, res: Response) => {
console.log("REquest Body : ", req.body)
  if (!payloadValidator(req.body)) {
    return res.status(400).json({ error: 'Invalid payload' })
  }
  try {
    const response = await claudeService.getPromptResponse(req.body)
    res.json(response)
  } catch (error) {
    res.status(500).json({ error: 'Failed to get response from Claude API' })
  }
}

export default { handlePrompt }
