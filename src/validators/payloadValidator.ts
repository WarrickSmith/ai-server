const payloadValidator = (payload: any): boolean => {
  console.log('TypeOf Payload Content : ', typeof payload.prompt)
  return typeof payload.prompt === 'string'
}

export default payloadValidator
