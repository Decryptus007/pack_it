import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../Layout"

import './Home.css'

import profileImg from '../../../images/profilePic.jpg'

export default function Home () {
    return (
        <Layout>
            <div className="home">
                <div className="homeHeader">
                    <h2>Home</h2>
                    <div className="homeHeaderMenu">
                        <FontAwesomeIcon className='icons' icon={['fas', 'bell']} />
                        <div className="homeProfile">
                            <div className="homeProfileText">
                                <h4>FullName</h4>
                                <p>ID: 123456</p>
                            </div>
                            <div className="profileImage">
                                <img src={profileImg} alt="profilePic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}