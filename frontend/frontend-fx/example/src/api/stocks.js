export async function fetchStockHistory(keyword) {
  const params = new URLSearchParams({
    q: keyword,
    numOfRows: '30',
  })

  const response = await fetch(`/api/stocks?${params.toString()}`)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || '주식 데이터를 불러오지 못했습니다.')
  }

  return data
}
