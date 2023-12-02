import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
import App from './App.tsx'
import './index.scss'
import 'virtual:svg-icons-register'
import 'uno.css'
import 'animate.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
)
