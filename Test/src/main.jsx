import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


//import App from './App.jsx'
//import App from './Ex0/App.jsx'
//import App from './Ex1/App.jsx'
import App from './Ex3/App.jsx'
//import App from './Ex3/App.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
