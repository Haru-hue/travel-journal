import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Info () {
    return (
        <header>
            <FontAwesomeIcon icon={faEarthAmericas}/><span className = "travel--text">My Travel Journal</span>
        </header>
    )
}