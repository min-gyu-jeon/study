import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      stockApiPlugin(env.DATA_GO_KR_SERVICE_KEY),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
  }
})

function stockApiPlugin(serviceKey) {
  return {
    name: 'stock-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/stocks', async (req, res) => {
        try {
          if (!serviceKey) {
            sendJson(res, 500, {
              error: 'DATA_GO_KR_SERVICE_KEY가 없습니다. .env.local 파일을 확인하세요.',
            })
            return
          }

          const requestUrl = new URL(req.url || '/', 'http://localhost')
          const keyword = (requestUrl.searchParams.get('q') || '').trim()
          const numOfRows = requestUrl.searchParams.get('numOfRows') || '30'

          if (!keyword) {
            sendJson(res, 400, { error: '검색어를 입력하세요.' })
            return
          }

          const params = new URLSearchParams({
            serviceKey,
            resultType: 'json',
            pageNo: '1',
            numOfRows,
          })

          const isStockCode = /^\d{6}$/.test(keyword)

          if (isStockCode) {
            params.set('likeSrtnCd', keyword)
          } else {
            params.set('itmsNm', keyword)
          }

          const apiUrl =
            'https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo'
          const response = await fetch(`${apiUrl}?${params.toString()}`)
          const payload = await response.json()
          const body = payload?.response?.body
          const header = payload?.response?.header
          const item = body?.items?.item || []
          const rawItems = Array.isArray(item) ? item : [item]
          const items = isStockCode
            ? rawItems.filter((stock) => stock?.srtnCd === keyword)
            : rawItems

          sendJson(res, response.ok ? 200 : response.status, {
            resultCode: header?.resultCode,
            resultMsg: header?.resultMsg,
            totalCount: Number(body?.totalCount || 0),
            items,
          })
        } catch (error) {
          sendJson(res, 502, {
            error: '공공데이터 API 조회에 실패했습니다.',
            detail: error instanceof Error ? error.message : String(error),
          })
        }
      })
    },
  }
}

function sendJson(res, status, data) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(data))
}
