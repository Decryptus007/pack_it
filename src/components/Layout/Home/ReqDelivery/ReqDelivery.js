
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../../Layout'
import HomeHeader from '../../HeaderTitle/HeaderTitle'

import './ReqDelivery.css'
import './ReqDeliveryMobile.css'

export default function ReqDelivery({ signOutUser, showSideBar, showSideBarState }) {


    return (
        <Layout signOutUser={signOutUser} showSideBar={showSideBar} showSideBarState={showSideBarState}>
            <div className='reqDeliveryPage'>
                <HomeHeader currentPage="New Delivery" showSideBar={showSideBar} showSideBarState={showSideBarState} />
                <div className='reqDeliveryUI'>
                    <div className='selectVehicle'>
                        <div className='bike'>
                            <FontAwesomeIcon icon="fa-solid fa-motorcycle" />
                            <p>Bike</p>
                        </div>
                        <div className='keke'>
                            <FontAwesomeIcon icon="fa-solid fa-caravan" />
                            <p>Keke Napep</p>
                        </div>
                        <div className='car'>
                            <FontAwesomeIcon icon="fa-solid fa-car-side" />
                            <p>Car</p>
                        </div>
                        <div className='truck'>
                            <FontAwesomeIcon icon="fa-solid fa-truck" />
                            <p>Truck</p>
                        </div>
                    </div>
                    <form className='reqDeliveryForm' onSubmit={e => e.preventDefault()}>
                        <div className='requestForm1'>
                            <label>
                                <h3>Pick up Address</h3>
                                <textarea placeholder="Type here..." />
                            </label>
                            <label>
                                <h3>Destination Address</h3>
                                <textarea placeholder="Type here..." />
                            </label>
                            <div className='deliveryTime'>
                                <label>
                                    <h3>Date</h3>
                                    <input type={'date'} />
                                </label>
                                <label>
                                    <h3>Time</h3>
                                    <input type={'time'} />
                                </label>
                            </div>
                            <label>
                                <h3>Description</h3>
                                <textarea placeholder="Type here..." />
                            </label>
                        </div>
                        <div className='requestForm2'>
                            <label>
                                <h3>Request Time</h3>
                                <input type={'text'} />
                            </label>
                            <label>
                                <h3>Item Image</h3>
                                <input type={'file'} />
                            </label>
                            <label>
                                <h3>Reciever Name</h3>
                                <input type={'text'} />
                            </label>
                            <label>
                                <h3>Reciever Phone Number</h3>
                                <input type={'tel'} />
                            </label>
                            <label>
                                <h3>Alternate Phone Number</h3>
                                <input type={'tel'} />
                            </label>
                            <button type='submit'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}