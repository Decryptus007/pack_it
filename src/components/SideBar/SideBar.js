import React from 'react'
import NavItem from './NavItems/NavItem'

import './SideBar.css'
import logImg from '../../images/pack it 111.png'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='brandLogo'>
                <img src={logImg} alt='Brand Logo' />
            </div>
            <NavItem />
        </div>
    )
}