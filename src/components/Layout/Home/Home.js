import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../Layout"

import './Home.css'

import profileImg from '../../../images/profilePic.jpg'

export default function Home() {
    let balance = `10,000`

    return (
        <Layout>
            <div className="home">
                <div className="homeHeader">
                    <h2>Home</h2>
                    <div className="homeHeaderMenu">
                        <div className="icons">
                            <Link className="notification" to="/notification">
                                <FontAwesomeIcon icon="fa-solid fa-envelope-open-text" />
                            </Link>
                        </div>

                        <div className="homeProfile">
                            <div className="homeProfileText">
                                <h4>Mary Jill</h4>
                                <p>ID: 12345678</p>
                            </div>
                            <div className="profileImage">
                                <img src={profileImg} alt="profilePic" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="orderStats">
                    <div id="activeStat" className="orderStat">
                        <h3>Active Delivery</h3>
                        <h1>3</h1>
                    </div>
                    <div className="orderStat">
                        <h3>Total Deliveries</h3>
                        <h1>16</h1>
                    </div>
                    <div className="orderStat">
                        <h3>Completed</h3>
                        <h1>10</h1>
                    </div>
                    <div id="cancelStat" className="orderStat">
                        <h3>Cancelled</h3>
                        <h1>3</h1>
                    </div>
                </div>
                <div className="deliveryFund">
                    <div className="reqDelivery">
                        <div className="reqDeliveryCaption">
                            <h2>Request Delivery</h2>
                            <p>Make a delivery</p>
                            <p>Offers ends in June</p>
                            <Link className="icons" to="/notification">
                                <FontAwesomeIcon icon="fa-solid fa-circle-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="fundWallet">
                        <FontAwesomeIcon icon="fa-solid fa-wallet" />
                        <div>
                            <p>Available Balance</p>
                            <h2>₦{balance}</h2>
                        </div>
                        <div className="fundBtn">
                            <Link to='/wallet'>Fund Wallet</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}