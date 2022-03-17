import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"

// Images import
import deliveryImg from '../../../images/deliveryPayement.png'
import cashDeposit from '../../../images/cashDeposit.png'
import cashWithdrawal from '../../../images/cashWithdrwal.png'
import atmCardImg from '../../../images/ADD CARD atm.png'
import masterCard from '../../../images/masterCard.png'
import verve from '../../../images/verve.png'
import visa from '../../../images/visa.png'

import './Wallet.css'

export default function Wallet() {

    const today = new Date();
    let time = today.getHours() + ':' + today.getMinutes()
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const transactionHistory = [
        { transactType: 'Delivery Payment', transactImg: deliveryImg, transactAmount: -2000, time: time, date: date },
        { transactType: 'Cash Deposit', transactImg: cashDeposit, transactAmount: 15000, time: time, date: date },
        { transactType: 'Cash Withdrawal', transactImg: cashWithdrawal, transactAmount: -1000, time: time, date: date },
        { transactType: 'Delivery Payment', transactImg: deliveryImg, transactAmount: -2000, time: time, date: date },
        { transactType: 'Delivery Payment', transactImg: deliveryImg, transactAmount: -2000, time: time, date: date },
        { transactType: 'Cash Deposit', transactImg: cashDeposit, transactAmount: 15000, time: time, date: date },
        { transactType: 'Cash Withdrawal', transactImg: cashWithdrawal, transactAmount: -1000, time: time, date: date },
        { transactType: 'Delivery Payment', transactImg: deliveryImg, transactAmount: -2000, time: time, date: date },
        { transactType: 'Delivery Payment', transactImg: deliveryImg, transactAmount: -2000, time: time, date: date },
        { transactType: 'Cash Deposit', transactImg: cashDeposit, transactAmount: 15000, time: time, date: date },
        { transactType: 'Cash Withdrawal', transactImg: cashWithdrawal, transactAmount: -1000, time: time, date: date },
        { transactType: 'Delivery Payment', transactImg: deliveryImg, transactAmount: -2000, time: time, date: date },
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
                                            <div key={id} className="transactionHistory">
                                                <div className="transactDetails">
                                                    <div className="transactInnerStyle">
                                                        <img src={th.transactImg} alt="imgIcon" />
                                                        <h4>{th.transactType}<br /><span>
                                                            {th.time} {th.date}
                                                        </span></h4>
                                                    </div>
                                                </div>
                                                <h3 className="transactSub">{th.transactAmount}</h3>
                                            </div>
                                        )
                                    } else if (th.transactType === 'Cash Deposit') {
                                        displayHistory = (
                                            <div key={id} className="transactionHistory">
                                                <div className="transactDetails">
                                                    <div className="transactInnerStyle">
                                                        <img src={th.transactImg} alt="imgIcon" />
                                                        <h4>{th.transactType}<br /><span>
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
                    <div className="walletCompartment2">
                        <img className="atmCardImg" src={atmCardImg} alt="Add Card" />
                        <div className="addCardUI">
                            <h4>Add New Card</h4>
                            <div className="scanCard">
                                <FontAwesomeIcon className="icon" icon="fa-solid fa-qrcode" />
                                <p>Or Enter Manually</p>
                                <div className="cardIcons">
                                    <img className="cardIcon" src={visa} alt="Add Card" />
                                    <img className="cardIcon active" src={masterCard} alt="Add Card" />
                                    <img className="cardIcon" src={verve} alt="Add Card" />
                                </div>
                                <form className="cardDetails" onSubmit={e => e.preventDefault()}>
                                    <div className="cardInput">
                                        <small>Card Name</small>
                                        <input type={"text"} placeholder="e.g. Adewale Factorial" />
                                    </div>
                                    <div className="cardInput">
                                        <small>Card Number</small>
                                        <input type={"number"} placeholder="xxxx xxxx xxxx xxxx" />
                                    </div>
                                    <div className="expCvc">
                                        <div className="cardInput">
                                            <small>Expiry Date</small>
                                            <input type={"number"} placeholder=" MM/YY " />
                                        </div>
                                        <div className="cardInput">
                                            <small>CVC</small>
                                            <input type={"number"} placeholder=" XXX " />
                                        </div>
                                    </div>
                                    <Link className="fundBtn" to='/wallet'>
                                        <div>Fund Wallet</div>
                                    </Link>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}