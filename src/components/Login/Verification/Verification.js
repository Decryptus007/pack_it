import React, { useState } from "react"
import OTPInput, { ResendOTP } from "otp-input-react"

import Modal from "../../Utilities/Modal/Modal"

import vLogo from '../../../images/pack it 111.png'

import './Verification.css'

export default function Verification({ onVerify }) {
    const [OTP, setOTP] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [modalMssg, setModalMssg] = useState("Error fetching data")

    const tggleModal = () => {
        setShowModal(!showModal)
    }

    let accessCode = "1111"

    const getLoggedIn = () => {

        if (OTP === accessCode) {
            setModalMssg("Logged In Successfully")
            setShowModal(true)
            onVerify()
        } else if (OTP === "") {
            setModalMssg("Input your OTP code")
            setShowModal(true)
        } else {
            setModalMssg("Incorrect OTP Code")
            setShowModal(true)
        }
    }

    return (
        <>
            {showModal && <Modal onClick={tggleModal}>{modalMssg}</Modal>}
            <div className="vLayout">
                <div className="vLayoutUI">
                    <img src={vLogo} alt="vLogo" />
                    <div className="vText">
                        <h3>Phone Verification</h3>
                        <p>We will send verification code to your number: {`080123245678`}</p>
                    </div>
                    <div className="otpBoxes">
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={4}
                            otpType="number"
                            disabled={false}
                            secure
                        />
                    </div>
                    <div className="verifyBtns">
                        <div onClick={getLoggedIn} className="verify">Verify</div>
                        <div className="resendUI">
                            <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}