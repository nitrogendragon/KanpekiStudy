import React from 'react'
import '../styles/VocabQuizPrompts.css'
export default function VocabQuizPrompt(props) {
    return (
        <div className='quiz-container'>
            <p>{props.prompt}</p>
        </div>
    )
}
