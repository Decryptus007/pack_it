
import React from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './NavItem.css'

export default function NavItem() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        switch (id) {
            case 1:
                navigate("/")
                break;
            case 2:
                navigate("/wallet")
                break;

            case 3:
                navigate("/liveTracking")
                break;

            case 4:
                navigate("/Chats")
                break;

            case 5:
                navigate("/Notification")
                break;

            case 6:
                navigate("/Support")
                break;

            case 7:
                navigate("/Settings")
                break;

            default:
                navigate("/404")
                break;
        }
    }

    const navLinks = [
        { name: 'Home', icon: <FontAwesomeIcon className='icons' icon={['fas', 'house-user']} />, directTo: () => handleClick(1) },
        { name: 'Wallet', icon: <FontAwesomeIcon className='icons' icon={['fas', 'wallet']} />,  directTo: () => handleClick(2) },
        { name: 'Live Tracking', icon: <FontAwesomeIcon className='icons' icon={['fas', 'chalkboard']} />,  directTo: () => handleClick(3) },
        { name: 'Chats', icon: <FontAwesomeIcon className='icons' icon={['fas', 'message']} />, directTo: () => handleClick(4) },
        { name: 'Notification', icon: <FontAwesomeIcon className='icons' icon={['fas', 'bell']} />, directTo: () => handleClick(5) },
        { name: 'Support', icon: <FontAwesomeIcon className='icons' icon={['fas', 'headset']} />, directTo: () => handleClick(6) },
        { name: 'Settings', icon: <FontAwesomeIcon className='icons' icon={['fas', 'gears']} />, directTo: () => handleClick(7) },
        { name: 'Logout', icon: <FontAwesomeIcon className='icons' icon={['fas', 'right-from-bracket']} />, directTo: () => handleClick(8) },
    ]

    return (
        navLinks.map((navLink, id) => (
            <div className='navLinks' key={id} onClick={navLink.directTo}> {navLink.icon} {navLink.name} </div>
        ))
    )
}