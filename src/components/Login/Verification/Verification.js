import React, { useState } from "react"
import OTPInput, { ResendOTP } from "otp-input-react"

import vLogo from '../../../images/pack it 111.png'

import './Verification.css'

export default function Verification ({ onVerify }) {
    const [OTP, setOTP] = useState("")
    // const [showModal, setShowModal] = useState(false)

    let accessCode = "1111"

    const getLoggedIn = () => {

        if (OTP === accessCode) {
            onVerify()
        } else {
            //NEEDS A MODAL
            alert("Incorrect code")
        }
    }

    return (
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
    )
}