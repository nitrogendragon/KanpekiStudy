import React from 'react'
import '../styles/VocabAnswerButtons.css'
import VocabAnswerButton from './VocabAnswerButton'
export default function VocabAnswerButtons(props) {
    
    const answerButtons = props.answers ? props.answers.map((answer,index) => 
        <VocabAnswerButton 
            key={answer} 
            answerId={index}
            answer ={answer}
            lastQuestion = {props.lastQuestion}
            onAnswerClicked = {props.onAnswerClicked}
            correctAnswer = {props.correctAnswer}/>
            ) : null
    return (
        <div className='vocab-answer-buttons-container'>
            {answerButtons}
        </div>
    )
}
