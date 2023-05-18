import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { Provider } from "react-redux";
import { store } from './Redux/store.jsx';

import App from './App.jsx'
import { DisplaySingleNote } from './Components/Display-single-note.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/note/:name" element={<DisplaySingleNote />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
