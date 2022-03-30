import React, { useState } from 'react'
import SideBar from "../SideBar/SideBar"
import Modal from '../Utilities/Modal/Modal'

import './Layout.css'

export default function Layout({ signOutUser, children, showSideBar, showSideBarState }) {
    const [showModal, setShowModal] = useState(false)

    const tggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            {showModal && <Modal onClick={tggleModal} >Logged Out successfully</Modal>}

            {showSideBarState && <SideBar signOutUser={signOutUser} showModal={tggleModal} showSideBar={showSideBar} />}
            <div className="webApp">
                {children}
            </div>
        </>
    )
}