import React from "react"
// import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import signOutImg from '../../../images/signOutImg.png'
import formLogo from '../../../images/pack it 111.png'

import './SignUp.css'
import './SignUpMobile.css'

export default function SignUp({ getVerify, onClick, setEmail }) {

    return (
        <>
            <div className="signOutLayout1">
                <div className="imgCanvas">
                    <img src={signOutImg} alt='signOutImg' />
                    <h2>Send and Recieve Package Anywhere</h2>
                </div>
            </div>
            <div className="signOutLayout2">
                <div className="signOutLayout2Main">
                    <h2>Sign Up</h2>
                    <form>
                        <img src={formLogo} alt='formLogo' />
                        <div className="inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-person" />
                            <input className="inputNoBox" type={"text"} placeholder="First Name" required />
                        </div>
                        <div className="inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-person" />
                            <input className="inputNoBox" type={"text"} placeholder="Last Name" required />
                        </div>
                        <div className="inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-mobile" />
                            <input className="inputNoBox" type={"tel"} placeholder="Phone No." required />
                        </div>
                        <div className="inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-at" />
                            <input onChange={e => setEmail(e.target.value)} className="inputNoBox" type={"email"} placeholder="Email" required />
                        </div>
                        <div className="inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                            <input className="inputNoBox" type={"password"} placeholder="Password" required />
                        </div>
                        <div className="inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                            <input className="inputNoBox" type={"password"} placeholder="Confirm password" required />
                        </div>
                        <div className="submitBtn" onClick={ getVerify } >
                            <div>Create Account</div>
                        </div>
                        <p>You already have an account? Log in <span onClick={onClick}>here</span></p>
                    </form>
                </div>
            </div>
        </>
    )
}