import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import TodoApp from './ToDo.jsx'
import QuoteGenerator from './QuoteGen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteGenerator />
  </StrictMode>,
)
