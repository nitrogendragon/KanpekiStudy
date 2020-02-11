import React from 'react'

export default function VocabQuizContinueButton(props) {
    function handleClick(){
        props.onContinueClicked()
    }

    const theButton = props.canContinue ?
        <button onClick={handleClick}>Continue</button> : <></>
    return (
        <div className='continue-container'>
            {theButton}
        </div>
        // {theButton}
    )
}
