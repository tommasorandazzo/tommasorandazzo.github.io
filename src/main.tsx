import { createRoot } from 'react-dom/client'
import App from './App'
import './style.css'

const appRoot = document.querySelector('app-root')
if (appRoot) createRoot(appRoot).render(<App />);
