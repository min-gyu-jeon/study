export function toNumber(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

export function formatNumber(value) {
  const number = Number(value)
  return Number.isFinite(number) ? number.toLocaleString('ko-KR') : '-'
}

export function formatSigned(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) {
    return '-'
  }

  return `${number > 0 ? '+' : ''}${number.toLocaleString('ko-KR')}`
}

export function formatDate(value, mode = 'long') {
  const text = String(value || '')

  if (!/^\d{8}$/.test(text)) {
    return '-'
  }

  const year = text.slice(0, 4)
  const month = text.slice(4, 6)
  const day = text.slice(6, 8)

  return mode === 'short' ? `${month}.${day}` : `${year}-${month}-${day}`
}
