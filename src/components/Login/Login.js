
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoImg from '../../images/favicon.png'
import deliveryTruck from '../../images/truckDelivery.png'

import './Login.css'

export default function Login() {
    const [createAcc, setCreateAcc] = useState(false)

    return (
        <div className="loginLayout">
            <div className="logLayout1">
                <div className="loginImg">
                    <img src={deliveryTruck} alt="DeliveryTruck" />
                </div>
            </div>
            <div className="logLayout2">
                <div className="logLayout2UI">
                    <h2>Log In</h2>
                    <form onSubmit={e => e.preventDefault()}>
                        <img src={logoImg} alt="logo" />
                        <div className="inputNo">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-mobile" />
                            <input className="inputNoBox" type={"number"} placeholder="Phone No." required />
                        </div>
                        <div className="inputPass">
                            <FontAwesomeIcon className="loginIcon" icon="fa-solid fa-unlock" />
                            <input className="inputPassBox" type={"password"} placeholder="Password" required />
                        </div>
                        <Link className="submitBtn" to='/'>
                            <div>Log In</div>
                        </Link>
                        <p>You don't have an account? Create an account <span onClick={() => setCreateAcc(true)}>here</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}