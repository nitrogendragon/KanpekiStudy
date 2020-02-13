import React from 'react'
import '../../styles/Vocab/VocabQuizContinueButton.css'
export default function VocabQuizContinueButton(props) {
    function handleClick(){
        props.onContinueClicked()
    }

    const theButton = props.canContinue ?
        <button className='continue-button' onClick={handleClick}>Continue</button> : <></>
    return (
        <div style={{padding:'10px'}}>
            {theButton}
        </div>
        
    )
}
