
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Layout/Home/Home'
import Wallet from './components/Layout/Wallet/Wallet'
import { Route, Routes } from "react-router-dom"

import './App.css'

library.add(fab, fas)

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
