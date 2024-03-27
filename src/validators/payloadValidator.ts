interface GamePayload {
  model: string
  prompt: string
  stream: boolean
}

const payloadValidator = (payload: GamePayload): boolean => {
  // Validate the existence of all required properties
  const hasRequiredProperties =
    typeof payload.model === 'string' &&
    typeof payload.prompt === 'string' &&
    typeof payload.stream === 'boolean'

  console.log('Payload Validation is : ', hasRequiredProperties)
  return hasRequiredProperties
}

export default payloadValidator
