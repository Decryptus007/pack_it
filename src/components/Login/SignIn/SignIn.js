import React, { useEffect, useRef, useState } from "react"
// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoImg from '../../../images/favicon.png'
import deliveryTruck from '../../../images/truckDelivery.png'

import './SignIn.css'
import './SignInMobile.css'

export function ForgotPass(props) {
    const [val, setVal] = useState('')
    const btnRef = useRef()

    useEffect(() => {
        if (val.length >= 1 && val.includes("@")) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    }, [val])

    return (
        <div className="forgotUI logLayout2">
            <p onClick={() => props.switchPage()} style={{ cursor: "pointer", position: "absolute", fontSize: "xx-large", fontWeight: "bold", top: "5px", left: "10px", padding: "2px" }}><FontAwesomeIcon icon="fa-solid fa-arrow-left-long" /></p>
            <form style={{ marginTop: "30%", width: "100%" }} onSubmit={e => e.preventDefault()}>
                <p style={{ fontSize: "large", width: "75%", display: "block", margin: "5% auto" }}>Input your email to recieve the OTP to reset your password.</p>
                <input onChange={e => {
                    setVal(e.target.value)
                    props.setEmail(e.target.value)
                }} style={{ display: "block", margin: "3% auto", width: "80%", height: "35px", fontSize: "medium", paddingLeft: "2%", borderRadius: "5px", border: "none" }} className="inputNoBox" type={"email"} placeholder="Email" required />
                <button ref={btnRef} className="btn" onClick={() => {props.getVerify(true)}} type={"submit"} style={{ display: "block", margin: "0 auto", padding: "2%", width: "50%", background: "transparent", color: "white", border: "1px solid white", borderRadius: "5px", cursor: "pointer" }} >Send OTP</button>
            </form>
        </div>
    )
}

export function SignInPage({ onClick, onVerify, switchPage }) {

    return (
        <div className="logLayout2">
            <div className="logLayout2UI">

            {/* ADMIN LOGIN */}
                <div style={{ position: "absolute", top: "1px", right: "1px", backgroundColor: "black", opacity: ".6" }} className="adminLogin">
                    <form onSubmit={e => e.preventDefault()}>
                        <h2>Admin Login</h2>
                        <input style={{ margin: "2% 0" }} type={"email"} placeholder="email" />
                        <input style={{ margin: "2% 0" }} type={"password"} placeholder="password" />
                        <button type="submit">Login</button>
                    </form>
                </div>


                <h2>Log In</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <img src={logoImg} alt="logo" />
                    <div className="inputNo inputLayout">
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-at" />
                        <input className="inputNoBox" type={"email"} placeholder="Email" required />
                    </div>
                    <div className="inputPass inputLayout">
                        <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                        <input className="inputPassBox" type={"password"} placeholder="Password" required />
                    </div>
                    <p onClick={() => switchPage()} style={{ textDecoration: "underline", marginBottom: "3%", cursor: "pointer" }}>Forgot Password?</p>
                    <div className="submitBtn" onClick={onVerify} >
                        <div>Log In</div>
                    </div>
                    <p>You don't have an account? Create an account <span onClick={onClick}>here</span></p>
                </form>
            </div>
        </div>
    )
}

export function SignIn({ onClick, getVerify, onVerify, setEmail }) {
    const [showLogin, setShowLogin] = useState(true)

    const switchPage = () => {
        setShowLogin(!showLogin)
    }

    return (
        <>
            < div className="logLayout1" >
                <div className="loginImg">
                    <img src={deliveryTruck} alt="DeliveryTruck" />
                    <h1>Reliable</h1>
                </div>
            </div >
            {showLogin ?
                <SignInPage switchPage={switchPage} onVerify={onVerify} onClick={onClick} />
                :
                <ForgotPass switchPage={switchPage} getVerify={(param) => getVerify(param)} setEmail={setEmail} />
            }
        </>
    )
}
