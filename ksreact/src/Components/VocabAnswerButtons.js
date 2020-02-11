import React from 'react'
import '../styles/VocabAnswerButtons.css'
import VocabAnswerButton from './VocabAnswerButton'
export default function VocabAnswerButtons(props) {
    
    const answerButtons = props.answers ? props.answers.map(answer => <VocabAnswerButton key={answer} answer ={answer} />) : null
    return (
        <div className='vocab-answer-buttons-container'>
            {answerButtons}
        </div>
    )
}
