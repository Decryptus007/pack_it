import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"

import './Wallet.css'

export default function Wallet() {

    const today = new Date();
    let time = today.getHours() + ':' + today.getMinutes()
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const transactionHistory = [
        { transactType: 'Delivery Payment', transactAmount: -2000, time: time, date: date },
        { transactType: 'Cash Deposit', transactAmount: 15000, time: time, date: date },
        { transactType: 'Cash Withdrawal', transactAmount: -1000, time: time, date: date },
        { transactType: 'Delivery Payment', transactAmount: -2000, time: time, date: date },
    ]

    return (
        <Layout>
            <div className="wallet">
                <HomeHeader currentPage="Wallet" />
                <OrderStats
                    cardTitle1="Total Transaction"
                    cardTitle2="Total Deposit"
                    cardTitle3="Total Payment"
                    cardTitle4="Total Withdrawn"
                    cardAmount1="₦300,000"
                    cardAmount2="₦280,000"
                    cardAmount3="₦250,000"
                    cardAmount4="₦30,000"
                />
                <div className="walletUI">
                    <div className="walletCompartment1">
                        <div className="subWalletCompartment1">
                            <p className="walletBalance">Wallet Balance<br /><span>₦10,000</span></p>
                            <FontAwesomeIcon className="icon" icon="fa-solid fa-wallet" />
                        </div>
                        <div className="subWalletCompartment2">
                            <div className="fundWalletBtn active">Fund Wallet</div>
                            <div className="withdrawBtn">Withdraw</div>
                        </div>
                        <div className="transactionUI">
                            <h3>Transactions:</h3>
                            <div className="transactBtns">
                                <div className="transactBtn active">All</div>
                                <div className="transactBtn">Deposit</div>
                                <div className="transactBtn">Withdrawals</div>
                            </div>
                            <div className="transactionHistories">
                                {transactionHistory.map((th, id) => {
                                    let displayHistory
                                    if (th.transactType === 'Delivery Payment' || th.transactType === 'Cash Withdrawal') {
                                        displayHistory = (
                                            <div className="transactionHistory">
                                                <div className="transactDetails">
                                                    <div>
                                                        <img src="" alt="imgIcon" />
                                                        <h4>{th.transactType}<br/><span>
                                                            {th.time} {th.date}
                                                        </span></h4>
                                                    </div>
                                                </div>
                                                <h3 className="transactSub">{th.transactAmount}</h3>
                                            </div>
                                        )
                                    }else if (th.transactType === 'Cash Deposit') {
                                        displayHistory = (
                                            <div className="transactionHistory">
                                                <div className="transactDetails">
                                                    <div>
                                                        <img src="" alt="imgIcon" />
                                                        <h4>{th.transactType}<br/><span>
                                                            {th.time} {th.date}
                                                        </span></h4>
                                                    </div>
                                                </div>
                                                <h3 className="transactAdd">{th.transactAmount}</h3>
                                            </div>
                                        )
                                    }
                                    return displayHistory
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="walletCompartment2"></div>
                </div>
            </div>
        </Layout>
    )
}