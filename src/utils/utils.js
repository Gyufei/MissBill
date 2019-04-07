export function isEmail (email) {
  const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return emailReg.test(email)
} 

export function formatPrecision (value, precision) {
  const val = String(value)
  const cells = val.match(/^(-?)(\d*)(\.(\d+))?$/)

  if (!cells) return val

  const negative = cells[1]
  let int = cells[2] || '0'
  let decimal = cells[4] || ''

  if (typeof precision === 'number') {
    decimal = decimal.padEnd(precision, '0').slice(0, precision)
  }
  return negative + int + '.' + decimal
}