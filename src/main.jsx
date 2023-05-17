import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import { DisplaySingleNote } from './Components/Display-single-note.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notes" element={<DisplaySingleNote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
