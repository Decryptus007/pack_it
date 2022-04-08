import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import './ResetPwd.css'

function ResetPwd () {

    const [newPwd, setNewPwd] = useState('')
    const [rePwd, setRePwd] = useState('')

    const btnRef = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        if ((newPwd !== '') && (newPwd === rePwd)) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    }, [newPwd, rePwd])


    return (
        <div className="resetPwdUI">
            <form onSubmit={e => e.preventDefault()} >
                <p>Enter New Password</p>
                <input onChange={(e) => setNewPwd(e.target.value)} type={"password"} />
                <p>Re-enter New Password</p>
                <input onChange={(e) => setRePwd(e.target.value)} type={"password"} />
                <button ref={btnRef} onClick={() => navigate('/')} type="submit">Save</button>
            </form>
        </div>
    );
}

export default ResetPwd ;