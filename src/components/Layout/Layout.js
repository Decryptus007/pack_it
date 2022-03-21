import React from "react"
import SideBar from "../SideBar/SideBar"

import './Layout.css'

export default function Layout({ children }) {

    return (
        <>
            <SideBar />
            <div className="webApp">
                {children}
            </div>
        </>
    )
}