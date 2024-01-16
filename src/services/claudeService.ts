import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey:
    process.env.APIKEY,
})

interface Content {
  type: string
  text: string
}

interface Response {
  id: string
  type: string
  role: string
  content: Content[]
  model: string
  stop_reason: string
  stop_sequence: any
}

const validateResponse = (response: Response): boolean =>
  Array.isArray(response.content) &&
  response.content.every(
    (contentItem) =>
      typeof contentItem.type === 'string' &&
      typeof contentItem.text === 'string'
  )
  
const getPromptResponse = async (payload: any) => {
  let response
  let attempts = 0
  do {
    response = await anthropic.beta.messages.create({
      model: 'claude-2.1',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: payload.prompt,
        },
      ],
    })
    console.log("Response : ", response)
    if (isValidResponse(response)) {
      return response.content[0].text || {}
    }

    attempts++
  } while (attempts < 2)

  throw new Error('Invalid response from Claude API after 3 attempts')
}

const isValidResponse = (response: any) => {
  const isValid = validateResponse(response)
  console.log("Result of response validation: ",isValid)

  return isValid 
}

export default { getPromptResponse }
