
import React, { useState } from "react"
import { SignIn } from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"

import './Login.css'

export default function Login({ getVerify, onVerify, setEmail }) {
    const [createAcc, setCreateAcc] = useState(false)

    const goToSignUp = () => {
        setCreateAcc(true)
    }
    const goToSignIn = () => {
        setCreateAcc(false)
    }

    const signIn = <SignIn onVerify={onVerify} getVerify={getVerify} onClick={goToSignUp} setEmail={setEmail} />
    const signUp = <SignUp getVerify={() => getVerify() } onClick={goToSignIn} setEmail={setEmail} />

    return (
        <div className="loginLayout">
            {createAcc ? signUp  : signIn}
        </div>
    )
}