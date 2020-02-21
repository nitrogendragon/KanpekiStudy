import React from 'react'

export default function Timer(props) {
    return (
        <div>
            <p>Time left: {props.timeRemaining}</p>
        </div>
    )
}
