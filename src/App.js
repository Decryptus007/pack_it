
import React from 'react'
import { Route, Routes } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Layout/Home/Home'
import Wallet from './components/Layout/Wallet/Wallet'
import Notification from './components/Layout/Notification/Notification'

import './App.css'

library.add(fab, fas, far)

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
