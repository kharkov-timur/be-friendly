export const required = (value) => {
  if (value) {
    return undefined
  }
  return 'Input is empty'
}

export const maxLength = max => value =>
  value && value.length > max
    ? `Max length is ${max} symbols.`
    : undefined
