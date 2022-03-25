
import React, { useState } from "react"
import Select from "react-dropdown-select";

import './AcctDetail.css'

export default function AcctDetail() {

    const [values, setValues] = useState([])
    const options = [
        { id: 1, name: "Bank 1" },
        { id: 2, name: "Bank 2" },
        { id: 3, name: "Bank 3" }
    ]

    const [typeVal, setTypeVal] = useState([])
    const bankType = [
        { id: 1, name: "Type 1" },
        { id: 2, name: "Type 2" }
    ]

    const [bankName, setBankName] = useState("")

    return (
        <form className="accDetailUI">
            <div className="accDetail">
                <p>Account Number:</p>
                <input className="input" type={"number"} placeholder="000 000 0000" />
            </div>
            <div className="accDetail">
                <p>Bank:</p>
                {/*<select className="select">
                    <option value={"Select Bank"}>Select Bank</option>
                    <option value={"Option 1"}>Option 1</option>
                    <option value={"Option 2"}>Option 2</option>
                    <option value={"Option 3"}>Option 3</option>
                </select>*/}
                <Select className="select"
                    labelField="name"
                    valueField="name"
                    noDataLabel="No matches found"
                    options={options}
                    placeholder="Select Bank or type the name"
                    onChange={(values) => setValues(values) }
                    separator={true}
                    dropdownGap={5}
                    color="#ab90f7"
                />
            </div>
            <div className="accDetail">
                <p>Account Type:</p>
                <Select className="select"
                    labelField="name"
                    valueField="name"
                    options={bankType}
                    placeholder="Select Account Type"
                    onChange={(typeVal) => setTypeVal(typeVal) }
                    separator={true}
                    dropdownGap={5}
                    color="#ab90f7"
                />
            </div>
            <div className="accDetail">
                <input value={bankName} id="bankName" className="input" type={"text"} placeholder="Bank Name" disabled />
            </div>
            <div className="saveAccBtn">SAVE</div>
        </form>
    )
}