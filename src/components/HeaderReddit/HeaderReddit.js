import React from "react";
import snoo from "../../assets/img.png"

function HeaderReddit() {
    return (
        <header className="headerBar">
            <img src={snoo} alt="Snoo" height="150" width="150" className="snooLogo"/>
            <h1>Reddit</h1>
        </header>
    )
}

export default HeaderReddit