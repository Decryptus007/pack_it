import React from "react"
// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoImg from '../../../images/favicon.png'
import deliveryTruck from '../../../images/truckDelivery.png'

import './SignIn.css'

export default function SignIn({ onClick, getVerify}) {

    return (
        <>
            <div className="logLayout1">
                <div className="loginImg">
                    <img src={deliveryTruck} alt="DeliveryTruck" />
                    <h1>Reliable</h1>
                </div>
            </div>
            <div className="logLayout2">
                <div className="logLayout2UI">
                    <h2>Log In</h2>
                    <form onSubmit={e => e.preventDefault()}>
                        <img src={logoImg} alt="logo" />
                        <div className="inputNo inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-mobile" />
                            <input className="inputNoBox" type={"number"} placeholder="Phone No." required />
                        </div>
                        <div className="inputPass inputLayout">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                            <input className="inputPassBox" type={"password"} placeholder="Password" required />
                        </div>
                        <div className="submitBtn" onClick={ getVerify } >
                            <div>Log In</div>
                        </div>
                        <p>You don't have an account? Create an account <span onClick={onClick}>here</span></p>
                    </form>
                </div>
            </div>
        </>
    )
}