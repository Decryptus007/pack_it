import React from "react"
import SideBar from "../SideBar/SideBar"

import './Layout.css'

export default function Layout(props) {

    return (
        <>
            <SideBar />
            <div className="webApp">
                {props.children}
            </div>
        </>
    )
}