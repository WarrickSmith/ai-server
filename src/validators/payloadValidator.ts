const payloadValidator = (payload: any): boolean => {
  // Implement your validation logic here
  // For example, check that payload has a 'content' property of type string
  console.log("Payload : ", payload)
  console.log('TypeOf Payload Content : ', typeof payload.prompt)
  return typeof payload.prompt === 'string'
}

export default payloadValidator
