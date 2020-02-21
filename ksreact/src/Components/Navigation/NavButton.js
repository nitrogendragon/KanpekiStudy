import React from 'react'
import '../../styles/Navigation/nav.css'
export default function NavButton(props) {
    return (
        <button className = "nav-button" onClick={() => props.history.push(props.address)} value = {props.address.toString()}>
            {props.buttonText}
        </button>
    )
}
