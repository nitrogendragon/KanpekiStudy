import React from 'react'
import '../../styles/Vocab/VocabQuizPrompts.css'
export default function VocabQuizPrompt(props) {
    return (
        <div className='quiz-container'>
            <p>{props.prompt}</p>
        </div>
    )
}
