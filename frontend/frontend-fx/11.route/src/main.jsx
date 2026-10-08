import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>           {/*페이지 이동 관리기*/}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
