import React from 'react'
import '../../styles/General/timer.css'
export default function Timer(props) {
    
    return (
        <div className="count-down">
            <p>Time left: {props.timeRemaining}</p>
        </div>
    )
}
