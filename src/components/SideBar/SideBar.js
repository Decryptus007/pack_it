import React from 'react'
// eslint-disable-next-line
import { useNavigate } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import NavItem from './NavItems/NavItem'

import './SideBar.css'
import logImg from '../../images/pack it 111.png'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='brandLogo'>
                <img src={logImg} alt='Brand Logo' />
            </div>
            <BrowserRouter>
                <NavItem />
            </BrowserRouter>
        </div>
    )
}