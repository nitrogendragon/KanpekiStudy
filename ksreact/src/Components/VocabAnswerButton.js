import React from 'react'
import '../styles/VocabAnswerButton.css'
export default function VocabAnswerButton(props) {
    function handleClick(event){
        // alert('You clicked ' + props.answer)
        alert('You clicked ' + event.target.value)
    
    }

    return (
        <div>
           <button className='vocab-answer-button' value={props.answer} onClick={handleClick}>{props.answer}</button>
            
        </div>
    )
}
