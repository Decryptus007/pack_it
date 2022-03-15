
import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileImg from '../../../images/profilePic.jpg'

import './HeaderTitle.css'

export default function HomeHeader(props) {


    return (
        <div className="homeHeader">
            <h2>{props.currentPage}</h2>
            <div className="homeHeaderMenu">
                <div className="icons">
                    <Link className="notification" to="/notification">
                        <FontAwesomeIcon icon="fa-solid fa-envelope-open-text" />
                    </Link>
                </div>

                <div className="homeProfile">
                    <div className="homeProfileText">
                        <h4>Mary Jill</h4>
                        <p>ID: 12345678</p>
                    </div>
                    <div className="profileImage">
                        <img src={profileImg} alt="profilePic" />
                    </div>
                </div>
            </div>
        </div>
    )
}