
import React, { useState } from "react"
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"

import './Login.css'

export default function Login({ getVerify }) {
    const [createAcc, setCreateAcc] = useState(false)
    // const [verifyCode, setVerifyCode] = useState()

    const goToSignUp = () => {
        setCreateAcc(true)
    }
    const goToSignIn = () => {
        setCreateAcc(false)
    }

    const signIn = <SignIn getVerify={() => getVerify() } onClick={goToSignUp} />
    const signUp = <SignUp getVerify={() => getVerify() } onClick={goToSignIn} />

    return (
        <div className="loginLayout">
            {createAcc ? signUp  : signIn}
        </div>
    )
}