import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './pages/RootLayout'
import Test1 from './pages/Test1'
import Test2 from './pages/Test2'
import Test3 from './pages/Test3'

function App() {
 
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>

        <Route path='/' element={<Home />} />
        <Route path='/test1' element={<Test1 />} />
        <Route path='/test2' element={<Test2 />} />
        <Route path='/test3' element={<Test3 />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
