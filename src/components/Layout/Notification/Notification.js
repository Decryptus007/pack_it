import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"

import profilePic from '../../../images/profilePic.jpg'
import notifySucss from '../../../images/smiley.png'
import notifyTrans from '../../../images/transactionNotifiy.png'

import './Notification.css'
import './NotificationMobile.css'

export default function Notification({ signOutUser, showSideBar, showSideBarState }) {

    const [notification, setNotification] = useState([{
        notifyImg: profilePic,
        notifyName: "Alfa Dogo",
        theMssg: "Comrade road no clear oo",
        time: "Just now"
    }, {
        notifyImg: notifySucss,
        notifyName: "Congratulations",
        theMssg: "Your package have been delivered.",
        time: "2 mins ago"
    }, {
        notifyImg: profilePic,
        notifyName: "Abeke Alani",
        theMssg: "Oga fuel scarce so you go settle me normal normal",
        time: "1hr ago"
    }, {
        notifyImg: notifyTrans,
        notifyName: "Transaction Alert",
        theMssg: "Your delivery fee has just been deducted.",
        time: "2hr ago"
    }, {
        notifyImg: notifySucss,
        notifyName: "Congratulations",
        theMssg: "Your package have been delivered.",
        time: "Recently"
    }])

    const [updatNot, setUpdateNot] = useState([...notification])

    useEffect(() => {
        setNotification([...updatNot])
    }, [updatNot])

    const delNotification = (id) => {
        updatNot.splice(id, 1)
        setUpdateNot([...updatNot])
    }

    const clearNotification = () => {
        updatNot.length = 0
        setUpdateNot([...updatNot])
    }


    return (
        <Layout signOutUser={signOutUser} showSideBar={showSideBar} showSideBarState={showSideBarState}>
            <div className="notification">
                <HomeHeader currentPage="Notification" showSideBar={showSideBar} />
                <div className="noticationUI">
                    <div className="notifyHeader">
                        <h3>Recent</h3>
                        <div className="notifyAction">
                            <p className="notifyActionBtn">Mark All as Read</p>
                            <p className="notifyActionBtn" onClick={clearNotification} >Clear All</p>
                        </div>
                    </div>
                    <div className="notifyMssgs">
                        {notification.map((notify, id) => (
                            <div key={id} className="notifyMssg">
                                <div className="deleteNoti" onClick={() => delNotification(id)}>
                                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                                </div>
                                <div className="notiDetails">
                                    <div className="notiDetailsMain">
                                        <img src={notify.notifyImg} alt="profilePic" />
                                        <div className="notiDetailsText">
                                            <h4>{`${notify.notifyName}: `}</h4>
                                            <p>{notify.theMssg}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="notiTime">{notify.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}