import React from 'react'
import '../styles/VocabAnswerButton.css'
export default function VocabAnswerButton(props) {
    function handleClick(){
        if(props.answerId == props.correctAnswer){

            alert('Your answer ' + props.answerId + ' is the correct answer. The answer is: ' + props.correctAnswer)
        }
        else{
            alert('Your answer ' + props.answerId )
        }
    
    }

    return (
        <div className='vocab-answer-button-border'>
           <button className='vocab-answer-button' value={props.answerId}
           onClick={handleClick}>{props.answer}, {props.answerId}, {props.correctAnswer}</button>
            
        </div>
    )
}
