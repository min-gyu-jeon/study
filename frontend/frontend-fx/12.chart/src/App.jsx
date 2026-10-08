import {Route,Routes} from 'react-router-dom'
import RootRayout from './pages/RootLayout'
import SalesChart from './pages/SalesChart'
import TrendChart from './pages/TrendChart'
import CategoryPieChart from './pages/CategoryPieChart'
import Home from './pages/Home'
import Weather from './pages/Weather'

function App() {
  

  return (
    <Routes>
      <Route element={<RootRayout/>}>
      <Route path="/" element={<Home/>}/>
        <Route path="/saleschart" element={<SalesChart/>}/>
        <Route path="/trendchart" element={<TrendChart/>}/>
        <Route path="/categorypiechart" element={<CategoryPieChart/>}/>
        <Route path="/weater" element={<Weather/>}/>
      </Route>
    </Routes>
  )
}

export default App
