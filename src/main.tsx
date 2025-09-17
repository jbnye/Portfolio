import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,} from 'react-router-dom'
import App from "./app"
import './index.css'
import { ThemeStatusProvider } from './context/themeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeStatusProvider>
        <App />
      </ThemeStatusProvider>
    </BrowserRouter>
  </StrictMode>,
)
