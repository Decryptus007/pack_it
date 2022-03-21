
import React, { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Routes
import Home from './components/Layout/Home/Home'
import Wallet from './components/Layout/Wallet/Wallet'
import Notification from './components/Layout/Notification/Notification'
import Login from './components/Login/Login'
import Verification from "./components/Login/Verification/Verification"
import PageNotFound from "./components/Utilities/PageNotFound/PageNotFound"

import './App.css'

library.add(fab, fas, far)

function App() {
  // TO ACCESS THE NORMAL UI CHANGE THE STATE TO TRUE
  const navigate = useNavigate()

  const [auth, setAuth] = useState(false)
  const [signUp, setSignUp] = useState(false)

  const goToVerify = () => {
    setSignUp(true)
    navigate('verification')
  }

  const signInUser = () => {
    setAuth(true)
    navigate('/')
  }

  const loggedInRoutes = (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )

  const loggedOutRoutes = (
    <Routes>
      <Route path="/" index element={<Login getVerify={goToVerify} />} />
      {signUp && <Route path="verification" element={ <Verification onVerify={signInUser} /> } /> }
      <Route path="*" element={ <PageNotFound /> } />
    </Routes>
  )

  return (
    <div className="App">
      { auth ? loggedInRoutes : loggedOutRoutes }
    </div>
  )
}

export default App;
