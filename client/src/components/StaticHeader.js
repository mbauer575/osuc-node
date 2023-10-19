import React from 'react'
import '../styles/header.css'
import osuLogo from '../images/osuLogo2.png'

function StaticHeader() {
    return (
        <div className="dashboard-header">
            <img src={osuLogo} alt="osu logo" className="logo" />
            <h1 className="title">OSUC energy dashboard</h1>
        </div>
    )
}

export default StaticHeader