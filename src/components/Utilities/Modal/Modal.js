import React from "react"

import './Modal.css'

export default function Modal ({refr, ans, children}) {

    return (
        <div className="Modal">
            <div className="info">
                {children}
            </div>
        </div>
  )
}