import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Content from './components/Content'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Header />
      <Content />
  </StrictMode>,
)
