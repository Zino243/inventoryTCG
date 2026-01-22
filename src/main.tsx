import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'

import App from './App'
import Dashboard from './Dashboard/Dashboard'
import Inventory from './Inventory/Inventory'
import Maze from './Maze/Maze'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/maze" element={<Maze />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
