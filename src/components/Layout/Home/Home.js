import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"
import RecentDeliveries from "./RecentDeliveries/RecentDeliveries"

import './Home.css'

import reqDeliveryImg from '../../../images/Request Delivery.png'

export default function Home({ signOutUser }) {
    let balance = `10,000`

    return (
        <Layout signOutUser={signOutUser}>
            <div className="home">
                <HomeHeader currentPage="Home" />
                <OrderStats
                    cardTitle1="Active Delivery"
                    cardTitle2="Total Deliveries"
                    cardTitle3="Completed"
                    cardTitle4="Cancelled"
                    cardAmount1="3"
                    cardAmount2="16"
                    cardAmount3="10"
                    cardAmount4="3"
                />
                <div className="deliveryFund">
                    <div className="reqDelivery">
                        <img src={reqDeliveryImg} alt="reqDeliveryImg" />
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
                            <h1>₦{balance}</h1>
                        </div>
                        <Link className="fundBtn" to='/wallet'>
                            <div>Fund Wallet</div>
                        </Link>
                    </div>
                </div>
                <div className="deliveryHistory">
                    <div className="recentDeliveriesHeader">
                        <h3>Recent Deliveries</h3><hr />
                    </div>
                    <RecentDeliveries />
                </div>
            </div>
        </Layout>
    )
}