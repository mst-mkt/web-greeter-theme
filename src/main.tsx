import '@fontsource-variable/lexend'
import { RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Background } from './components/Background'
import './global.css'
import { router } from './routes'
import './utils/mock'
import { connectSignals } from './utils/signals'

window.addEventListener('GreeterReady', () => {
  connectSignals()
})

// biome-ignore lint/style/noNonNullAssertion: #root is always present in index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Background />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
