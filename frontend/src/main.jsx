import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SnackbarProvider, useSnackbar } from 'notistack';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </StrictMode>,
)
