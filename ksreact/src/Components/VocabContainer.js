import React, {useState, useEffect} from 'react'
import VocabQuizPrompt from './VocabQuizPrompt'
import VocabCard from './VocabCard'
import VocabCardImg from './VocabCardImg'
import '../styles/VocabContainer.css'
export default function VocabContainer(props) {
    return (
        <>
        <div className='main-container'>
            <VocabQuizPrompt prompt = 'What is the english translation for this word?'/>
            <div className='break'></div>
            <VocabCard hiragana = 'わたし' />
            <VocabCardImg imgUrl = '../Images/I.jfif'/>
        </div>

        </>
    )
}
