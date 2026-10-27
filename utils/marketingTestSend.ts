export const MARKETING_TEST_LIMIT = 10
export const marketingTestWhitelist = ['+620000000001', '+650000000001', '+600000000001']

export const normalizeMarketingTestPhone = (value: string) => value.trim().replace(/[\s()-]/g, '')
export const marketingTestPhoneError = (value: string) => {
  const phone = normalizeMarketingTestPhone(value)
  if (!phone) return 'Enter a WhatsApp number.'
  if (!/^\+[1-9]\d{7,14}$/.test(phone)) return 'Use international format, for example +62812…'
  if (!marketingTestWhitelist.includes(phone)) return 'This number is not on the demo whitelist.'
  return ''
}
