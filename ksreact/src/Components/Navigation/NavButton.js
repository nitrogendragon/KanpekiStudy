import React from 'react'

export default function NavButton(props) {
    return (
        <button onClick={() => props.history.push(props.address)} value = {props.address.toString()}>
            {props.buttonText}
        </button>
    )
}
