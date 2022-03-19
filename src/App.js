
import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Routes
import Home from './components/Layout/Home/Home'
import Wallet from './components/Layout/Wallet/Wallet'
import Notification from './components/Layout/Notification/Notification'
import Login from './components/Login/Login'

import './App.css'

library.add(fab, fas, far)

function App() {

  const [auth, setAuth] = useState(false)

  const loggedInRoutes = (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )

  const loggedOutRoutes = (
    <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )

  return (
    <div className="App">
      { auth ? loggedInRoutes : loggedOutRoutes }
    </div>
  )
}

export default App;
