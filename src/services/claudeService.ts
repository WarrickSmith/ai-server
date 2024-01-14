import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey:
    process.env.APIKEY,
})

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

    if (isValidResponse(response)) {
      return response
    }

    attempts++
  } while (attempts < 3)

  throw new Error('Invalid response from Claude API after 3 attempts')
}

const isValidResponse = (response: any) => {
  // This is a placeholder for a real validation function.
  // You would replace this with your actual validation logic,
  // which may include checking the structure of the response,
  // ensuring that necessary fields are present and correctly formatted, etc.
  return true // Assuming all responses are valid for this example.
}

export default { getPromptResponse }
