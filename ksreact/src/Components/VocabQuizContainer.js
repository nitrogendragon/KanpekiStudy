import React, {useState, useEffect} from 'react'
import VocabQuizPrompt from './VocabQuizPrompt'
import VocabCard from './VocabCard'
import VocabCardImg from './VocabCardImg'
import VocabAnswerButtons from './VocabAnswerButtons'
import VocabQuizContinueButton from './VocabQuizContinueButton'
import '../styles/VocabContainer.css'
export default function VocabContainer(props) {
    const [questionNumber, setQuestionNumber] = useState(0)//always start at 0
    const [canContinue, setCanContinue] = useState(false)
    const [lastQuestion, setLastQuestion] = useState(false)
    /* Current key values(Question, VocabKanji, VocabHiragana, VocabEnlgish, ImgUrl, Id, Answer1, 
        Answer2, Answer3, Answer4, CorrectAnswer, LastQuestion)*/
    const vocabQuizData = require('../Data/VocabQuiz1.json')//eventually change via useState,Effect
    
    function handleAnswerClicked(isCorrectAnswer, isLastQuestion)
    {
        if( isCorrectAnswer){
            setCanContinue(true) 
        }
        if(isLastQuestion){
            setLastQuestion(true)
        }
        else{
            setLastQuestion(false)
        }
    }

    function handleContinueClicked()
    {
        setCanContinue(false)
        !lastQuestion ? 
            setQuestionNumber(questionNumber+1) :
            alert('You have reached the end of the quiz, congratulations!')
            //In the future we should have this go to page that says try again or go to home or something like that
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
                lastQuestion = {vocabQuizData[questionNumber].LastQuestion}
                onAnswerClicked = {handleAnswerClicked}
                correctAnswer = {vocabQuizData[questionNumber].CorrectAnswer}
            />
            <div className='break'></div>
            <VocabQuizContinueButton onContinueClicked ={handleContinueClicked} canContinue={canContinue}/>
        </div>

        </>
    )
}
