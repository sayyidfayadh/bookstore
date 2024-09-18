import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import library from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={library}>
    <App />
    </Provider>
  </StrictMode>,
)
