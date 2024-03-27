import { GoogleGenerativeAI } from '@google/generative-ai'

interface Part {
  text: string 
}

interface Content {
  parts: Part[]
}

interface Candidate {
  content: Content
}

interface ApiResponse {
  candidates?: Candidate[]
}

const validateResponse = (response: ApiResponse): boolean => {
  return (
    Array.isArray(response.candidates) &&
    response.candidates.every(
      (candidate) =>
        Array.isArray(candidate.content.parts) &&
        candidate.content.parts.every((part) => typeof part.text === 'string')
    )
  )
}

const getPromptResponse = async (payload: {
  model: string
  prompt: string
}) => {
  const { model: aiModel, prompt } = payload
  const apiKey = process.env.GEMINI_APIKEY || ''
  const genAI = new GoogleGenerativeAI(apiKey)

  let attempts = 0
  while (attempts < 3) {
    console.log(`Attempt ${attempts + 1} of 3 connecting to Gemini AI API`)
    const model = genAI.getGenerativeModel({ model: aiModel })
    const result = await model.generateContent(prompt)
    const response = (await result.response) as ApiResponse

    if (validateResponse(response)) {
      if (response && response.candidates && response.candidates.length > 0) {
        const textData = JSON.parse(
          response.candidates[0].content.parts[0].text
        )
        return textData
      }
    }

    attempts++
  }

  throw new Error('Invalid response from Claude API after 3 attempts')
}

export default { getPromptResponse }
