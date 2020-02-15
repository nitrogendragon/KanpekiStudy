import React from 'react'
import '../../styles/Vocab/VocabAnswerButton.css'
export default function VocabAnswerButton(props) {
    const answerButtonStyle = "vocab-answer-button" + (props.canContinue && props.answerId != props.correctAnswer ? "-not-interactive": "")
    function handleClick(){
        //stop if we already got the right answer otw proceed like normal
        if(props.canContinue){
            return null
        }
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
           <button className={answerButtonStyle} value={props.answerId}
           onClick={handleClick}>{props.answer}</button>
            
        </div>
    )
}
