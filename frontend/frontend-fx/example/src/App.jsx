import { useMemo, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { fetchStockHistory } from './api/stocks'
import { formatDate, formatNumber, formatSigned, toNumber } from './utils/format'
import './App.css'

function App() {
  const [query, setQuery] = useState('삼성전자')
  const [rows, setRows] = useState([])
  const [status, setStatus] = useState('종목명이나 단축코드를 입력해 조회하세요.')
  const [isLoading, setIsLoading] = useState(false)

  const sortedRows = useMemo(
    () => [...rows].sort((a, b) => a.basDt.localeCompare(b.basDt)),
    [rows],
  )
  const latest = rows[0]
  const chartRows = sortedRows.map((row) => ({
    date: formatDate(row.basDt, 'short'),
    close: toNumber(row.clpr),
    volume: toNumber(row.trqu),
    rate: toNumber(row.fltRt),
  }))

  async function handleSubmit(event) {
    event.preventDefault()
    const keyword = query.trim()

    if (!keyword) {
      setStatus('검색어를 입력하세요.')
      return
    }

    setIsLoading(true)
    setStatus('조회 중입니다.')

    try {
      const data = await fetchStockHistory(keyword)
      setRows(data.items)
      setStatus(`${formatNumber(data.totalCount)}건 중 최근 ${data.items.length}건을 불러왔습니다.`)
    } catch (error) {
      setRows([])
      setStatus(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="dashboard">
      <header className="topbar">
        <div>
          <p className="eyebrow">공공데이터포털 금융위원회 API</p>
          <h1>K-Stock Dashboard</h1>
        </div>

        <form className="search" onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="삼성전자 또는 005930"
            aria-label="종목명 또는 단축코드"
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? '조회 중' : '조회'}
          </button>
        </form>
      </header>

      <section className="summary" aria-live="polite">
        <Metric label="상태" value={status} />
        <Metric label="종목" value={latest ? `${latest.itmsNm} (${latest.srtnCd})` : '-'} />
        <Metric label="최신 기준일" value={latest ? formatDate(latest.basDt) : '-'} />
        <Metric
          label="종가"
          value={latest ? `${formatNumber(latest.clpr)}원` : '-'}
          tone={toNumber(latest?.vs) > 0 ? 'up' : toNumber(latest?.vs) < 0 ? 'down' : ''}
        />
        <Metric
          label="전일대비"
          value={latest ? `${formatSigned(latest.vs)} (${latest.fltRt}%)` : '-'}
          tone={toNumber(latest?.vs) > 0 ? 'up' : toNumber(latest?.vs) < 0 ? 'down' : ''}
        />
        <Metric label="거래량" value={latest ? formatNumber(latest.trqu) : '-'} />
      </section>

      <section className="chartGrid">
        <article className="panel">
          <div className="panelHeader">
            <h2>종가 흐름</h2>
            <span>최근 {chartRows.length}거래일</span>
          </div>
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartRows}>
                <CartesianGrid stroke="#e4e9ed" vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} tickFormatter={compactNumber} />
                <Tooltip formatter={(value) => `${formatNumber(value)}원`} />
                <Line type="monotone" dataKey="close" stroke="#146c63" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <h2>거래량</h2>
            <span>일별 거래량</span>
          </div>
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartRows}>
                <CartesianGrid stroke="#e4e9ed" vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} tickFormatter={compactNumber} />
                <Tooltip formatter={(value) => formatNumber(value)} />
                <Bar dataKey="volume" fill="#4d7c9a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>

      <section className="panel tablePanel">
        <div className="panelHeader">
          <h2>일별 시세</h2>
          <span>{rows.length ? `${rows.length}개 데이터` : '조회 전'}</span>
        </div>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>기준일</th>
                <th>시가</th>
                <th>고가</th>
                <th>저가</th>
                <th>종가</th>
                <th>전일대비</th>
                <th>등락률</th>
                <th>거래량</th>
                <th>시가총액</th>
              </tr>
            </thead>
            <tbody>
              {rows.length ? (
                rows.map((row) => (
                  <tr key={`${row.srtnCd}-${row.basDt}`}>
                    <td>{formatDate(row.basDt)}</td>
                    <td>{formatNumber(row.mkp)}</td>
                    <td>{formatNumber(row.hipr)}</td>
                    <td>{formatNumber(row.lopr)}</td>
                    <td>{formatNumber(row.clpr)}</td>
                    <td className={toNumber(row.vs) > 0 ? 'up' : toNumber(row.vs) < 0 ? 'down' : ''}>
                      {formatSigned(row.vs)}
                    </td>
                    <td className={toNumber(row.fltRt) > 0 ? 'up' : toNumber(row.fltRt) < 0 ? 'down' : ''}>
                      {row.fltRt}%
                    </td>
                    <td>{formatNumber(row.trqu)}</td>
                    <td>{formatNumber(row.mrktTotAmt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="empty" colSpan="9">
                    아직 조회한 데이터가 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

function Metric({ label, value, tone = '' }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong className={tone}>{value}</strong>
    </div>
  )
}

function compactNumber(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) {
    return value
  }
  if (Math.abs(number) >= 1_0000_0000) {
    return `${Math.round(number / 1_0000_0000)}억`
  }
  if (Math.abs(number) >= 1_0000) {
    return `${Math.round(number / 1_0000)}만`
  }
  return number.toLocaleString('ko-KR')
}

export default App
