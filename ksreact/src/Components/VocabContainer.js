import React, {useState, useEffect} from 'react'
import VocabQuizPrompt from './VocabQuizPrompt'
import VocabCard from './VocabCard'
import VocabCardImg from './VocabCardImg'
import VocabAnswerButtons from './VocabAnswerButtons'
import VocabQuiz1Data from '../Data/VocabQuiz1.json'
import '../styles/VocabContainer.css'
export default function VocabContainer(props) {
    const [questionNumber, setQuestionNumber] = useState(0)//always start at 0
    /* Current key values(Question, VocabKanji, VocabHiragana, VocabEnlgish, ImgUrl, Id, Answer1, 
        Answer2, Answer3, Answer4, CorrectAnswer)*/
    const vocabQuizData = require('../Data/VocabQuiz1.json')//eventually change via useState,Effect
    function handleAnswerClicked()
    {
        alert('you clicked an answer')
    }
    return (
        <>
        <div className='main-container'>
            {/* In general probably want a json to  */}
            <VocabQuizPrompt prompt = {vocabQuizData[questionNumber].Question}/>{/*feed list of prompts */}
            <div className='break'></div>
            <VocabCard hiragana = {vocabQuizData[questionNumber].VocabHiragana} />{/* feed list of words */}
            <VocabCardImg imgUrl = {vocabQuizData[questionNumber].ImgUrl}/>{/*this will be fed a list of imgUrl's eventually */}
            <VocabAnswerButtons answers = {[
                vocabQuizData[questionNumber].Answer1,
                vocabQuizData[questionNumber].Answer2,
                vocabQuizData[questionNumber].Answer3,
                vocabQuizData[questionNumber].Answer4
                ]}
                onAnswerClicked = {handleAnswerClicked}
                correctAnswer = {vocabQuizData[questionNumber].CorrectAnswer}
            />
        </div>

        </>
    )
}
