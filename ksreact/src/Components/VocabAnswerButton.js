import React from 'react'
import '../styles/VocabAnswerButton.css'
export default function VocabAnswerButton(props) {
    function handleClick(){
        if(props.answerId == props.correctAnswer){
            props.onAnswerClicked(true,props.lastQuestion)
            // alert('Your answer {' + props.answer + '} is the correct answer. The answer is option ' + props.correctAnswer)
            
        }
        else{
            // alert('Your answer {' + props.answer + '} was not the correct answer. Give it another shot!')
            props.onAnswerClicked(false, props.lastQuestion)
        }
    
    }

    return (
        <div className='vocab-answer-button-border'>
           <button className='vocab-answer-button' value={props.answerId}
           onClick={handleClick}>{props.answerId}: {props.answer}</button>
            
        </div>
    )
}
