import React from "react"
import Layout from "../Layout"

import './Notification.css'

export default function Notification ({ signOutUser }) {
    return (
        <Layout signOutUser={signOutUser}>
            <div className="notification"> Notify me of my orders </div>
        </Layout>
    )
}