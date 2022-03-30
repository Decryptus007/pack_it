import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"

import './Settings.css'

export default function Settings({ signOutUser, showSideBar, showSideBarState }) {
    const navigate = useNavigate()

    //I WANNA DISPLAY A CONFIRMATION MODAL DIALOG WINDOW BEFORE LOGGING OUT
    return (
        <Layout signOutUser={signOutUser} showSideBar={showSideBar} showSideBarState={showSideBarState}>
            <div className="settings">
                <HomeHeader currentPage="Settings" showSideBar={showSideBar} />
                <div className="settingsUI">
                    <div className="settingsLayout1">
                        <div className="settingActn" onClick={() => navigate("editProfile")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-user-pen" />
                            <p>Edit Profile</p>
                        </div>
                        <div className="settingActn" onClick={() => navigate("accDetail")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-id-card" />
                            <p>Account Details</p>
                        </div>
                        <div className="settingActn" onClick={() => navigate("security")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-lock" />
                            <p>Security</p>
                        </div>
                        <div className="settingActn" onClick={() => navigate("notificationSettings")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-sliders" />
                            <p>Notification Settings</p>
                        </div>
                        <div className="settingActn" onClick={() => navigate("about")}>
                            <FontAwesomeIcon className="settingActnIcon" icon="fa-solid fa-circle-info" />
                            <p>About</p>
                        </div>
                        <div className="settingActn" onClick={signOutUser}>
                            <FontAwesomeIcon className="settingActnLog" icon="fa-solid fa-right-from-bracket" />
                            <p>LOGOUT</p>
                        </div>
                    </div>
                    <div className="settingsLayout2">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Layout>
    )
}