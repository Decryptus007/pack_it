
import React from "react"
// eslint-disable-next-line no-unused-vars
import { Outlet, useNavigate } from "react-router-dom"
import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"

import driverImg from '../../../images/driverImg.png'

import "./Chats.css"

export default function Chats({ signOutUser, showSideBar, showSideBarState }) {

    const drivers = [
        { name: "Alfa Dogo", image: driverImg },
        { name: "Abeke Alani", image: driverImg },
        { name: "Bimpe Kogbagidi", image: driverImg },
        { name: "Black Camaru", image: driverImg }
    ]

    return (
        <Layout signOutUser={signOutUser} showSideBar={showSideBar} showSideBarState={showSideBarState}>
            <div className="chats">
                <HomeHeader currentPage="Chats" showSideBar={showSideBar} showSideBarState={showSideBarState} />
                <div className="chatUI">
                    <div className="driversChat">
                        {drivers.map((driver, id) => (
                            <div tabIndex={0} className="driverChat" key={id}>
                                <div className="img">
                                    {/*<div className="greenDot"></div>*/}
                                    <img src={driver.image} alt="driverImg" />
                                </div>
                                <p>{driver.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="driverConvo">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Layout>
    )
}