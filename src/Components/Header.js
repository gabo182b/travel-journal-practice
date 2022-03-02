import React from "react";
import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <header className="header">
            <FontAwesomeIcon className="icon" icon={faGlobeAmericas} />
            <h3 className="header__title">My travel journal</h3>
        </header>
    )
}

export { Header }