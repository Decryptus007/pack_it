
import React from "react"
import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"

export default function Chats ({ signOutUser, showSideBar, showSideBarState }) {

    return (
        <Layout signOutUser={signOutUser} showSideBar={showSideBar} showSideBarState={showSideBarState}>
            <div className="chats">
                <HomeHeader currentPage="Chats" showSideBar={showSideBar} showSideBarState={showSideBarState} />
                <div className="chatUI">
                    
                </div>
            </div>
        </Layout>
    )
}