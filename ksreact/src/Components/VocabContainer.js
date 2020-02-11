import React, {useState, useEffect} from 'react'
import VocabQuizPrompt from './VocabQuizPrompt'
import VocabCard from './VocabCard'
import VocabCardImg from './VocabCardImg'
import VocabAnswerButtons from './VocabAnswerButtons'
import '../styles/VocabContainer.css'
export default function VocabContainer(props) {
    return (
        <>
        <div className='main-container'>
            {/* In general probably want a json to  */}
            <VocabQuizPrompt prompt = 'What is the english translation for this word?'/>{/*feed list of prompts */}
            <div className='break'></div>
            <VocabCard hiragana = 'わたし' />{/* feed list of words */}
            <VocabCardImg imgUrl = '../Images/I.jfif'/>{/*this will be fed a list of imgUrl's eventually */}
            <VocabAnswerButtons answers = {['who?', 'where', 'this', 'I, me']}/>
        </div>

        </>
    )
}
